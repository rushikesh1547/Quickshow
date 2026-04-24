import {Inngest, step} from 'inngest'
import User from '../models/User.js';
import Show from '../models/Show.js';
import Booking from '../models/Booking.js';
import sendEmail from '../configs/nodemailer.js';


// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

//Inngest function to save user data to database
const syncUserCreation = inngest.createFunction(
    {
        id: "sync-user-from-clerk",
        triggers: { event: 'clerk/user.created' },
    },

    async ({event})=> {
        const {id, first_name,last_name , email_addresses, image_url} = event.data 
        const userData = {
            _id: id, 
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url,
        }   
        await User.create(userData)
    }
)

//Inngest Function to delete user from database 
const syncUserDeletion = inngest.createFunction(
    {
        id: "delete-user-with-clerk",
        triggers: { event: 'clerk/user.deleted' },
    },
    async ({event})=> {
    const {id} = event.data
    await User.findByIdAndDelete(id)
    }
)

//Inngest Function to update user in database 
const syncUserUpdation = inngest.createFunction(
    {
        id: "update-user-from-clerk",
        triggers: { event: 'clerk/user.updated' },
    },
    async ({event})=> {
        const {id, first_name,last_name , email_addresses, image_url} = event.data 
        const userData = {
            _id: id, 
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url,
        }   
        await User.findByIdAndUpdate(id, userData)

    }
)

//Inngest function to cancel booking and release seats of show after 10 minutes of booking created if payment is not made 

const releaseSeatsAndDeleteBooking = inngest.createFunction(
    {
        id: "release-seats-delete-booking",
        triggers: { event: 'app/checkpayment' },
    },
    async ({event,step})=> {
        const tenMinutesLater = new Date(Date.now() + 10 * 60 * 1000);
        await step.sleepUntil('wait-for-10-minutes', tenMinutesLater);

        await step.run('check-payment-status', async () => {
            const bookingId = event.data.bookingId;
            const booking = await Booking.findById(bookingId);

            //If payment is not made then delete booking and release seats of show

            if(!booking.isPaid){
                const show = await Show.findById(booking.show);
                booking.bookedSeats.forEach((seat) => {
                    delete show.occupiedSeats[seat];
                });
                show.markModified('occupiedSeats');
                await show.save();
                await Booking.findByIdAndDelete(booking._id);
            }
        })
    })

    //Inngest function to send email when user books a show

    const sendBookingConfirmationEmail = inngest.createFunction(
        {
            id:"send-booking-confirmation-email",
            triggers:        {event: "app/show.booked"},

        },
        async({event,step})=> {
            const {bookingId} = event.data;
            const booking = await Booking.findById(bookingId).populate({
                path: 'show',
                populate: {
                    path: 'movie',
                    model: 'Movie'
                }
            }).populate('user');

            await sendEmail({
                to: booking.user.email,
                subject: `Payment Confirmation: "${booking.show.movie.title}" booked!`,
           body: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 10px;">

                <h2 style="color:#e50914; margin-bottom: 5px;">
                    🎬 Booking Confirmed!
                </h2>

                <p style="margin-top:0;">Hi <strong>${booking.user.name}</strong>,</p>

                <p>
                    Your tickets for 
                    <strong style="color:#f84464;">${booking.show.movie.title}</strong> 
                    are successfully booked! 🍿
                </p>

                <div style="background:#f9f9f9; padding:15px; border-radius:8px; margin:15px 0;">
                    
                    <p style="margin:5px 0;">
                    📅 <strong>Date:</strong> 
                    ${new Date(booking.show.showDateTime).toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' })}
                    </p>

                    <p style="margin:5px 0;">
                    ⏰ <strong>Time:</strong> 
                    ${new Date(booking.show.showDateTime).toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}
                    </p>

                    <p style="margin:5px 0;">
                    🎟️ <strong>Seats:</strong> ${booking.seats.join(", ")}
                    </p>

                    <p style="margin:5px 0;">
                    💳 <strong>Amount Paid:</strong> ₹${booking.totalAmount}
                    </p>

                </div>

                <p>
                    🎉 Grab your popcorn and enjoy the show!
                </p>

                <p>
                    If you have any questions or need assistance, feel free to reach out to us.
                </p>

                <p style="margin-top:20px;">
                    Cheers,<br/>
                    <strong>QuickShow Team 🚀</strong>
                </p>

                <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

                <p style="font-size:12px; color:#888; text-align:center;">
                    This is an automated email. Please do not reply.
                </p>

                </div>`
                
            })
        }
    )

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation, releaseSeatsAndDeleteBooking, sendBookingConfirmationEmail];
