import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/api/images')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                // console.log(res);
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
                {images.map((image) => (
                    <div className={styles.indexcolumn} key={image.id} >
                        <Image
                            src={`/${image.path_display}`}
                            alt={image.name}
                            className='object-contain'
                            layout='fill'
                            // objectFit='cover'
                            width={500}
                            height={500}
                        />
                    </div>
                ))}
            </div>
    );
};

export default Home;
