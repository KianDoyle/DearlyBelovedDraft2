import React from 'react';
import prisma from '../db/prismaClient'

function Admin() {

    const messages = async ()=> {
        prisma.messages.findMany();
        return {
            props: {
                messages,
            },
        };
    }

    const bookings = async ()=> {
        prisma.bookings.findMany();

        return {
            props: {
                bookings,
            },
        };
    }

    return (
        <div>
            <h1>Welcome, Lezli!</h1>
            <div id="bookings">
                <ul>
                    { bookings.map((booking) => (
                        <li key={booking.id}>
                            <div id="username">{booking.name}</div>
                            <div id="date">{booking.date}</div>
                            <div id="contact-info">
                                <div id="number">{booking.phone}</div>
                                <div id="email">{booking.email}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="messages">
                <ul>
                    { messages.map((message) => (
                        <li key={message.id}>
                            <div id="message-wrapper">
                                <div id="username">{message.username}</div>
                                <div id="message-content">{message.content}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                { /* pull all messages from database here */}
            </div>
        </div>);
}

export default Admin;