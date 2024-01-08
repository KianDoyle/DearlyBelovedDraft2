import React from 'react';
import styles from './styles.module.css';

function Partners() {
    return (
        <div class={styles.partnersformattingwrapper}> 
            <div class={styles.partnersrow1}>
                <p class={styles.partnersp}>
                    Over the years I&apos;ve had the pleasure of working with some amazing people
                    <br></br>They deliver the highest quality services with a real care for their clients
                    <br></br>Check out some of these wonderful people below and follow the links to see their work
                </p>
            </div>   
            
            <div class={styles.partnersrow2}>
                <a href="https://www.chefshorney.co.uk/" class={styles.partnerschefshorney} target="_blank">
                    <Image 
                        src="Images/ChefShorneyLogo.png"
                        alt="Chef Shorney logo"
                    />
                </a>
                <a href="https://www.instagram.com/stestrength/" class={styles.partnersstestrength} target="_blank">
                    <div class={styles.partnersstestrengthimagecontainer}>
                        <Image 
                            src="Images/stestrengthvr1.jpg"
                            alt="SteStrength image 1"
                        />
                        <Image 
                            src="Images/stestrengthls1.jpg"
                            alt="SteStrength image 1"
                        />
                        <Image 
                            src="Images/stestrengthls2.jpg"
                            alt="SteStrength image 1"
                        />
                    </div>
                </a>
            </div> 
        </div>
    );
}

export default Partners;