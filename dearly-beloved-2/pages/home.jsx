import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/images')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                // Assuming the data is an array of image objects
                setImages(data);
            })
            .catch((error) => console.error('Error fetching images:', error));
    }, []);

    return (
        <div className={styles.indexportfolioimages}>
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
