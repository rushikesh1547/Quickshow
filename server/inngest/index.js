import { Inngest } from 'inngest'
import User from '../models/User.js';
import Show from '../models/Show.js';
import Booking from '../models/Booking.js';
import sendEmail from '../configs/nodeMailer.js';


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
                    🎟️ <strong>Seats:</strong> ${Array.isArray(booking.bookedSeats) ? booking.bookedSeats.join(", ") : "N/A"}
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

    //Inngest function to send reminders
    const sendShowReminders = inngest.createFunction(
        {
            id: "send-show-reminders",
            triggers: { cron: "0 */8 * * *" }, // every 8 hours
        },

        async({step})=> {
            const now = new Date();
            const in8Hours = new Date(now.getTime() + 8 * 60 * 60 * 1000);

            const windowStart = new Date(in8Hours.getTime() - 10 * 60 * 1000);

            //Prepare reminder task
            const reminderTasks = await step.run('prepare-reminder-tasks', async () => {
                const shows = await Show.find({
                    showTime : {$gte: windowStart, $lte: in8Hours}
                }).populate('movie');

                const tasks = [];

                for(const show of shows){
                    if(!show.movie || !show.occupiedSeats) continue;

                    const userIds = [...new Set(Object.values(show.occupiedSeats))];

                    if(userIds.length === 0) continue;

                    const users = await User.find({_id: {$in: userIds}}).select('name email');

                    for(const user of users){
                        tasks.push({
                            userEmail: user.email,
                            userName: user.name,
                            movieTitle: show.movie.title,
                            showTime: show.showDateTime
                        })
                }
            }
            return tasks;
        })
        if(reminderTasks.length === 0) {
        return {sent: 0,message: "No reminders to send."}
        }

        //Send reminder emails
        const results = await step.run('send-all-reminders', async()=> {
            return await Promise.allSettled(
                reminderTasks.map(task => sendEmail({
                    to: task.userEmail,
                    subject: `Reminder: Your movie "${task.movieTitle}" is about to start!`,
                    body: `
                    <div style="font-family: Arial, sans-serif; color:#333; line-height:1.5;">

                    <h3 style="color:#e50914; margin-bottom:5px;">
                        ⏰ Reminder: Your Movie Starts Soon
                    </h3>

                    <p>Hi <strong>${booking.user.name}</strong>,</p>

                    <p>
                        This is a quick reminder for your movie 
                        <strong style="color:#f84464;">${booking.show.movie.title}</strong>.
                    </p>

                    <p>
                        📅 ${new Date(booking.show.showDateTime).toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' })}<br/>
                        ⏰ ${new Date(booking.show.showDateTime).toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}
                    </p>

                    <p>
                        🎟️ Seats: ${booking.seats}
                    </p>

                    <p>
                        Please arrive a bit early. 🍿
                    </p>

                    <p>
                        — QuickShow Team
                    </p>

                    </div>
                    `
                }))
            )
        })
        const sent = results.filter(r => r.status === 'fulfilled').length;
        const failed = results.length - sent;

        return {
            sent,
            failed,
            message: `Reminders sent: ${sent}, failed: ${failed}`
        }
     }
  )

  //Inngest function to send notifications to users when new shows are added for a movie
  const sendNewShowNotifications = inngest.createFunction(
    {id: "send-new-show-notifications",
    triggers: {event: "app/shows.added"},
    },
    async({event})=>{
        const {movieTitle} = event.data;

        const users = await User.find({});

        for(const user of users){
            const userEmail = user.email;
            const userName = user.name;

            const subject = `New shows added : "${movieTitle}"!`;
            const body =  `
            <div style="font-family: Arial, sans-serif; color:#333; line-height:1.5;">
            <h3 style="color:#e50914; margin-bottom:5px;">
                🎬 New Show Added!
            </h3>

            <h2>Hi ${userName},</h2>

            <p>
                Good news! A new show for 
                <strong style="color:#f84464;">${movieTitle}</strong> 
                is now available on QuickShow. 🍿
            </p>

            <p>
                📅 ${showDate}<br/>
                ⏰ ${showTime}
            </p>

            <p>
                Book your seats now before they fill up!
            </p>

            <p>
                — QuickShow Team 🚀
            </p>

            </div>
            `;
        await sendEmail({
            to: userEmail,
            subject,
            body,
        })

        }

        return {message: "Notifications sent to all users about new shows."}
    }
  )


export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation, releaseSeatsAndDeleteBooking, sendBookingConfirmationEmail, sendShowReminders, sendNewShowNotifications];
