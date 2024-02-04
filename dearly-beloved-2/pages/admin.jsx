import React, { useEffect, useState } from 'react';
import prisma from '../db/prismaClient';
import styles from './styles.module.css';

async function fetchMessages() {
    const messages = await prisma.messages.findMany();
    return messages;
}

async function fetchBookings() {
    const bookings = await prisma.booking.findMany();
    return bookings;
}

function Admin() {
    const [messages, setMessages] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUploading(true);
        setError('');

        const formData = new FormData(event.target);
        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Upload failed');
            }

            // Handle the successful upload here
            // For example, you might want to fetch updated images
        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    useEffect(() => {
        fetchMessages().then((messages) => setMessages(messages));
        fetchBookings().then((bookings) => setBookings(bookings));
    }, []);

    return (
        <div className={styles.adminbody}>
            <h1 className={styles.admintitle}>Welcome, Lezli!</h1>
            <div className={styles.adminbmwrapper}>
                <div id="bookings" className={styles.adminbooking}>
                    <ul className={styles.adminbookingul}>
                        { bookings.map((booking) => (
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
                        { messages.map((message) => (
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
            <div className="formwrapper">
                <form onSubmit={handleSubmit}>
                    <input type="file" name="file" accept="image/png, image/jpeg" multiple />
                    <input type='text' name='names' defaultValue='Input the image names here' />
                    <button type="submit" disabled={uploading}>Upload</button>
                </form>
            </div>
        </div>);
}

export default Admin;
