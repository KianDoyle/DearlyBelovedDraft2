import React from 'react';
import prisma from '../db/prismaClient';
import styles from './app/styles.module.css';

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
        <div className={styles.admin-body}>
            <h1 className={styles.admin-title}>Welcome, Lezli!</h1>
            <div className={styles.admin-bm-wrapper}>
                <div id="bookings" className={styles.admin-booking}>
                    <ul className={styles.admin-booking-ul}>
                        { bookings.map((booking) => (
                            <li key={booking.id} className={styles.admin-booking-li}>
                                <div id="username" className={styles.admin_bookings_username}>{booking.name}</div>
                                <div id="date"className={styles.admin_bookings_date}>{booking.date}</div>
                                <div id="contact-info" className={styles.admin_info}>
                                    <div id="number" className={styles.admin_bookings_number}>{booking.phone}</div>
                                    <div id="email" className={styles.admin_email}>{booking.email}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="messages" className={styles.admin-message}>
                    <ul className={styles.admin-message-ul}>
                        { messages.map((message) => (
                            <li key={message.id} className={styles.admin-message-li}>
                                <div id="message-wrapper" className={styles.admin_message_wrapper}>
                                    <div id="username" className={styles.admin_message_username}>{message.username}</div>
                                    <div id="message-content" className={styles.admin_message_content}>{message.content}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>);
};

export default Admin;