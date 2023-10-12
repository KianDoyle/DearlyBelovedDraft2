import React from 'react';
import prisma from '../db/prismaClient'

async function pullMessages () {
    const messages = prisma.messages.findMany();

    return {
        props: {
            messages,
        },
    };
}

async function pullBookings () {
    const bookings = prisma.bookings.findMany();

    return {
        props: {
            bookings,
        },
    };
}

function Admin() {

    const messages = pullMessages();
    const bookings = pullBookings();

    return (
        <div>
            <h1>Welcome, Lezli!</h1>
            <div id="bookings">
                <ul>
                    { bookings.map((booking) => (
                        <li key={booking.id}>{/* booking information here */}</li>
                    ))}
                </ul>
            </div>
            <div id="messages">
                <ul>
                    { messages.map((message) => (
                        <li></li>
                    ))}
                </ul>
                { /* pull all messages from database here */}
            </div>
        </div>);
}

export default Admin;