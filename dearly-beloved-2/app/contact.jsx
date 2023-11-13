import React from 'react';
import prisma from '../db/prismaClient';
import styles from '../app/styles.module.css';

function Contact() {
    const handleSubmit = (messageData) => {
        const newMessage = await.prisma.create({
            data: {
                name: messageData.name,
                phone: messageData.phone,
                email: messageData.email,
                message: messageData.content,
                date: messageData.date,
            },
        })
    };

    return (
        <div>
            <div id={styles.contact-form-wrapper}>
                <form action="#" method="post" name="contact-form" id="contact-form" className={styles.form}>
                    <div class={styles.contact-input-wrapper}>
                        <label for="name-input" class={styles.contact-input-label}>FULL NAME</label>
                        <br></br>
                        <input type="text" id="name-input" className={styles.input}></input>
                    </div>
                    <div class={styles.contact-input-wrapper}>
                        <label for="email-input" class={styles.contact-input-label}>EMAIL ADDRESS</label>
                        <br></br>
                        <input type="email" id="email-input" className={styles.input}></input>
                    </div>
                    <div class={styles.contact-input-wrapper}>
                        <label for="phone-input" class={styles.contact-input-label}>PHONE NUMBER</label>
                        <br></br>
                        <input type="text" id="phone-input" className={styles.input}></input>
                    </div>
                    <div class={styles.contact-input-wrapper}>
                        <label for="text-input" class={styles.contact-input-label}>ENQUIRY DETAILS</label>
                        <br></br>
                        <textarea id="text-input" className={styles.textarea}></textarea>
                    </div>
                    <div class={styles.contact-button-wrapper}>
                        <button type="button" id="submit" className={styles.button} onClick={()=> handleSubmit({/* GET INFO FROM FORM */})}>SUBMIT</button>
                    </div>
                </form>
            </div>
         </div>
    );
}

export default Contact;