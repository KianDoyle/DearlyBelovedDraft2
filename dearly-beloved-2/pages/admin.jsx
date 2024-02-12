import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const fetchMessages = async () => {
    const response = await fetch('/api/messages');
    if (!response.ok) {
        throw new Error('Failed to fetch messages');
    }
    return await response.json();
}

const fetchBookings = async () => {
    const response = await fetch('/api/bookings');
    if (!response.ok) {
        throw new Error('Failed to fetch bookings');
    }
    return await response.json();
}

function Admin() {
    const [messages, setMessages] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [messagesData, bookingsData] = await Promise.all([fetchMessages(), fetchBookings()]);
                setMessages(messagesData);
                setBookings(bookingsData);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

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

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Upload failed');
            }

            const result = await response.json();
            console.log('Upload success:', result);
            // Handle success here
        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className={styles.adminbody}>
            <h1 className={styles.admintitle}>Welcome, Lezli!</h1>
            <div className={styles.adminbmwrapper}>
                <div id="bookings" className={styles.adminbooking}>
                    <div className={styles.bookingstitle}>
                        Bookings
                    </div>
                    <ul className={styles.adminbookingul}>
                        {bookings.map((booking) => (
                            <li key={booking.bookingID} className={styles.adminbookingli}>
                                <div className={styles.adminbookingsinfo}>{booking.name}</div>
                                <div className={styles.adminbookingsinfo}>{booking.date}</div>
                                <div className={styles.adminbookingsinfo}>{booking.location}</div>
                                <div className={styles.adminbookingsindo}>£{booking.price}</div>
                                <div className={styles.admininfo}>
                                    <div className={styles.adminbookingsinfo}>{booking.phone}</div>
                                    <div className={styles.adminbookinginfo}>{booking.email}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="messages" className={styles.adminmessage}>
                    <div className={styles.messagetitle}>
                        Messages
                    </div>
                    <ul className={styles.adminmessageul}>
                        {messages.map((message) => (
                            <li key={message.messageID} className={styles.adminmessageli}>
                                <div className={styles.adminmessagewrapper}>
                                    <div className={styles.adminmessagecontent}>{message.name}</div>
                                    <div className={styles.adminmessagecontent}>{message.message}</div>
                                    <div className={styles.adminmessagecontent}>{message.phone}</div>
                                    <div className={styles.adminmessagecontent}>{message.email}</div>
                                    <div className={styles.adminmessagecontent}>{message.date}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.adminformwrapper}>
                <form onSubmit={handleSubmit}>
                    <input type="file" name="files" accept="image/png, image/jpeg" multiple />
                    {/* <input type="text" name="names" placeholder="Input the image name here" /> */}
                    <button type="submit" disabled={uploading}>Upload</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}

export default Admin;
