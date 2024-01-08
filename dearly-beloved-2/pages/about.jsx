import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

function About() {
    return (
        <div>
            <div className={styles.aboutwrapper}>
                <div id="headshot-wrapper" className={styles.aboutheadshotwrapper}>
                    <Image 
                        src="/lezli-face.jpg" 
                        alt="headshot" 
                        width = {500}
                        layout='intrinsic'
                    />
                </div>
                <div id="info-wrapper" className={styles.aboutinfowrapper}>
                    <p>
                        Hey there, I&apos;m Lezli - a passionate photographer with a love for all things alternative and unique. My lens is my way of capturing the world through a different perspective, and I&apos;m thrilled to have you join me on this visual journey.
                        <br></br>I&apos;ve always found beauty in the unconventional, the offbeat, and the extraordinary. From vibrant cityscapes to intimate portraits, my goal is to showcase the world&apos;s hidden wonders and celebrate individuality. With a background deeply rooted in alternative culture, I&apos;ve developed an eye for those fleeting moments that speak volumes.
                        <br></br>Photography, to me, is more than just snapping pictures; it&apos;s a way of freezing emotions, stories, and memories in time. Each image I capture tells a story, and I&apos;m excited to work with you to bring your own narrative to life. Whether it&apos;s a daring fashion shoot, an edgy music event, or a personal portrait session, I&apos;m dedicated to crafting visuals that resonate.
                        <br></br>When I&apos;m not behind the camera, you can find me at strongman competitions, discovering new music, or simply getting lost in a good movie. These experiences fuel my creativity and inspire my photography. I&apos;m constantly seeking the extraordinary in the everyday, and I can&apos;t wait to collaborate with you to create something truly remarkable.
                        <br></br>So, if you&apos;re ready to step outside the box and capture moments that reflect your true essence, let&apos;s connect and embark on a photographic adventure unlike any other. Let&apos;s create art that speaks volumes and captures the essence of who you are.
                        <br></br>Stay unique,
                        <br></br>Lezli
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;