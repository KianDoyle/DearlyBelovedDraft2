import React, { useState, useEffect } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import styles from './styles.module.css';
import Image from 'next/image';

const clientId = 'woixl1iflym0w59';
const clientSecret = 'zwm6elhd2nrlfkg'; // Replace with your app's client secret

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('./pages/images')
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch((error) => console.error('error fetching images:', error));
    }, []);

    return (
        <div className={styles.indexportfolioimages}>
            {/* import images from drop box link and 'style' them */}
            <div className={styles.indexrow}>
                <div className={styles.indexcolumn}>
                    {images.slice(0, 5).map((image) => (
                        <Image 
                            key={image.client_modified} 
                            src={image.path_display} 
                            alt={image.name} 
                        />
                    ))}
                </div>
                <div className={styles.indexcolumn}>
                    {images.slice(5, 10).map((image) => (
                        <Image 
                            key={image.client_modified} 
                            src={image.path_display} 
                            alt={image.name} 
                        />                    
                    ))}
                </div>
                <div className={styles.indexcolumn}>
                    {images.slice(10, 15).map((image) => (
                        <Image 
                            key={image.client_modified} 
                            src={image.path_display} 
                            alt={image.name} 
                        />                    
                    ))}
                </div>
                <div className={styles.indexcolumn}>
                    {images.slice(15, 20).map((image) => (
                        <Image 
                            key={image.client_modified} 
                            src={image.path_display} 
                            alt={image.name} 
                        />                    
                    ))}
                </div>
            </div>
        </div>
    );


};

export default Home;
