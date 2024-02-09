import React, { useEffect } from 'react';
import styles from './styles.module.css'

const Book = () => {
    return (
        <div className={styles.checkfrontiframewrapper}>
            <iframe
                src="https://dearly-beloved-photography.checkfront.com/reserve/"
                frameborder="0"
                allowFullScreen
                title="Checkfront Booking Widget"
            ></iframe>
        </div>
    );
};

export default Book;