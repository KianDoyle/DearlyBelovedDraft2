import React from 'react';
import styles from '../app/styles.module.css';

function About() {
    return (
        <div>
            <div className={styles.about-wrapper}>
                <div id="headshot-wrapper" className={styles.about-headshot-wrapper}>
                    <img src="../app/public/lezli-face.jpg" alt="headshot" width = "500px"></img>
                </div>
                <div id="info-wrapper" className={styles.about-info-wrapper}>
                    <p>
                        Hey there, I'm Lezli - a passionate photographer with a love for all things alternative and unique. My lens is my way of capturing the world through a different perspective, and I'm thrilled to have you join me on this visual journey.
                        <br></br>I've always found beauty in the unconventional, the offbeat, and the extraordinary. From vibrant cityscapes to intimate portraits, my goal is to showcase the world's hidden wonders and celebrate individuality. With a background deeply rooted in alternative culture, I've developed an eye for those fleeting moments that speak volumes.
                        <br></br>Photography, to me, is more than just snapping pictures; it's a way of freezing emotions, stories, and memories in time. Each image I capture tells a story, and I'm excited to work with you to bring your own narrative to life. Whether it's a daring fashion shoot, an edgy music event, or a personal portrait session, I'm dedicated to crafting visuals that resonate.
                        <br></br>When I'm not behind the camera, you can find me at strongman competitions, discovering new music, or simply getting lost in a good movie. These experiences fuel my creativity and inspire my photography. I'm constantly seeking the extraordinary in the everyday, and I can't wait to collaborate with you to create something truly remarkable.
                        <br></br>So, if you're ready to step outside the box and capture moments that reflect your true essence, let's connect and embark on a photographic adventure unlike any other. Let's create art that speaks volumes and captures the essence of who you are.
                        <br></br>Stay unique,
                        <br></br>Lezli
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;