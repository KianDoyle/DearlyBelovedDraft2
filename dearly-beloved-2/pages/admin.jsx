import React from 'react';
import prisma from '../db/prismaClient';
import styles from './styles.module.css';

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
        <div className={styles.adminbody}>
            <h1 className={styles.admintitle}>Welcome, Lezli!</h1>
            <div className={styles.adminbmwrapper}>
                <div id="bookings" className={styles.adminbooking}>
                    <ul className={styles.adminbookingul}>
                        { books.map((booking) => (
                            <li key={booking.id} className={styles.adminbookingli}>
                                <div id="username" className={styles.adminbookingsusername}>{booking.name}</div>
                                <div id="date"className={styles.adminbookingsdate}>{booking.date}</div>
                                <div id="contact-info" className={styles.admininfo}>
                                    <div id="number" className={styles.adminbookingsnumber}>{booking.phone}</div>
                                    <div id="email" className={styles.adminemail}>{booking.email}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="messages" className={styles.adminmessage}>
                    <ul className={styles.adminmessageul}>
                        { texts.map((message) => (
                            <li key={message.id} className={styles.adminmessageli}>
                                <div id="message-wrapper" className={styles.adminmessagewrapper}>
                                    <div id="username" className={styles.adminmessageusername}>{message.username}</div>
                                    <div id="message-content" className={styles.adminmessagecontent}>{message.content}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>);
};

export default Admin;