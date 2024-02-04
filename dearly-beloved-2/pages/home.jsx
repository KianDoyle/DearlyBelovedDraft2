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

                {images.map((image) => (
                        <div className={styles.indexcolumn} key={image.id}>
                            <Image 
                                src={`/uploads/${image.path_display}.jpg`}
                                alt={image.name}
                                layout="fill"
                                style={{objectFit:"contain"}}
                                // sizes='(max-width:500px) 100vw, (max-width: 1000px) 45vw, 20vw'
                                width={image.width}
                                height={image.height}
                            />
                        </div>
                    ))}

                {/* <div className={styles.indexcolumn}>
                    {images.slice(0, 5).map((image) => (
                        <Image 
                            key={image.id} 
                            src={`/uploads/${image.path_display}.jpg`}
                            alt={image.name} 
                            fill
                            objectFit='contain'
                            sizes='(max-width:500px) 100vw, (max-width: 1000px) 45vw, 20vw'
                        />
                    ))}
                </div>
                <div className={styles.indexcolumn}>
                    {images.slice(5, 10).map((image) => (
                        <Image 
                            key={image.id} 
                            src={`/uploads/${image.path_display}.jpg`} 
                            alt={image.name} 
                            fill
                            objectFit='contain'
                            sizes='(max-width:500px) 100vw, (max-width: 1000px) 45vw, 20vw'
                        />                    
                    ))}
                </div>
                <div className={styles.indexcolumn}>
                    {images.slice(10, 15).map((image) => (
                        <Image 
                            key={image.id}
                            src={`/uploads/${image.path_display}.jpg`} 
                            alt={image.name} 
                            fill
                            objectFit='contain'
                            sizes='(max-width:500px) 100vw, (max-width: 1000px) 45vw, 20vw'
                        />                    
                    ))}
                </div>
                <div className={styles.indexcolumn}>
                    {images.slice(15, 20).map((image) => (
                        <Image 
                            key={image.id} 
                            src={`/uploads/${image.path_display}.jpg`} 
                            alt={image.name} 
                            fill
                            objectFit='contain'
                            sizes='(max-width:500px) 100vw, (max-width: 1000px) 45vw, 20vw'
                        />                    
                    ))}
                </div> */}
            </div>
        </div>
    );


};

export default Home;
