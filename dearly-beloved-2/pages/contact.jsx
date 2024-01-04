import React from 'react';
import { useState } from 'react';
import prisma from '../db/prismaClient';
import styles from './styles.module.css';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.targetName]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await prisma.message.create({
                data: {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                    date: new Date,
                },
            });

            console.log('Form successfully submitted');

            setFormData({
                name: '',
                phone: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error submitting form: ', error);
        }
    };


    return (
        <div>
            <div id={styles.contactformwrapper}>
                <form method="post" name="contact-form" id="contact-form" className={styles.form} onSubmit={handleSubmit}>
                    <div class={styles.contactinputwrapper}>
                        <label for="name-input" class={styles.contactinputlabel}>FULL NAME</label>
                        <br></br>
                        <input type="text" id="name-input" className={styles.input} value={formData.name} onChange={handleChange}></input>
                    </div>
                    <div class={styles.contactinputwrapper}>
                        <label for="email-input" class={styles.contactinputlabel}>EMAIL ADDRESS</label>
                        <br></br>
                        <input type="email" id="email-input" className={styles.input} value={formData.email} onChange={handleChange}></input>
                    </div>
                    <div class={styles.contactinputwrapper}>
                        <label for="phone-input" class={styles.contactinputlabel}>PHONE NUMBER</label>
                        <br></br>
                        <input type="text" id="phone-input" className={styles.input} value={formData.phone} onChange={handleChange}></input>
                    </div>
                    <div class={styles.contactinputwrapper}>
                        <label for="text-input" class={styles.contactinputlabel}>ENQUIRY DETAILS</label>
                        <br></br>
                        <textarea id="text-input" className={styles.textarea} value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div class={styles.contactbuttonwrapper}>
                        <button type="submit" id="submit" className={styles.button}>SUBMIT</button>
                    </div>
                </form>
            </div>
         </div>
    );
}

export default Contact