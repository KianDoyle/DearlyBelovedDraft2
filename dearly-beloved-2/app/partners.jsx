import React from 'react';
import styles from '../app/styles.module.css';

function Partners() {
    return (
        <div class={styles.partners-formatting-wrapper}> 
            <div class={styles.partners-row-1}>
                <p class={styles.partners-p}>
                    Over the years I've had the pleasure of working with some amazing people
                    <br></br>They deliver the highest quality services with a real care for their clients
                    <br></br>Check out some of these wonderful people below and follow the links to see their work
                </p>
            </div>   
            
            <div class={styles.partners-row-2}>
                <a href="https://www.chefshorney.co.uk/" class={styles.partners-chef-shorney} target="_blank">
                    <img src="Images/ChefShorneyLogo.png"></img>
                </a>
                <a href="https://www.instagram.com/stestrength/" class={styles.partners-stestrength} target="_blank">
                    <div class={styles.partners-stestrength-image-container}>
                        <img src="Images/stestrengthvr1.jpg"></img>
                        <img src="Images/stestrengthls1.jpg"></img>
                        <img src="Images/stestrengthls2.jpg"></img>
                    </div>
                </a>
            </div> 
        </div>
    );
}

export default Partners;