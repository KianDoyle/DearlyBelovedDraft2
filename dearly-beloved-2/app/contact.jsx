import React from 'react';
import styles from '../app/styles.module.css';

function Contact() {
    return (
        <div>
            <div id="contact-form-wrapper">
                <form action="#" method="post" name="contact-form" id="contact-form">
                    <div class="input-wrapper">
                        <label for="name-input" class="input-label">FULL NAME</label>
                        <br></br>
                        <input type="text" id="name-input"></input>
                    </div>
                    <div class="input-wrapper">
                        <label for="email-input" class="input-label">EMAIL ADDRESS</label>
                        <br></br>
                        <input type="email" id="email-input"></input>
                    </div>
                    <div class="input-wrapper">
                        <label for="phone-input" class="input-label">PHONE NUMBER</label>
                        <br></br>
                        <input type="text" id="phone-input"></input>
                    </div>
                    <div class="input-wrapper">
                        <label for="text-input" class="input-label">ENQUIRY DETAILS</label>
                        <br></br>
                        <textarea id="text-input"></textarea>
                    </div>
                    <div class="button-wrapper">
                        <button type="button" id="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
         </div>
    );
}

export default Contact;