import { access } from 'fs';
import React from 'react';
import styles from '../app/styles.module.css';

const { Dropbox } = require('dropbox');

const dbox = new Dropbox({
    clientId: w5t0j6pgtnuh65m,
    clientSecret: swxie9u8h8asfh8,
});

// const authoriseURL = dbox.getAuthenticationUrl('http')

const accessToken = "sl.Bo9w_Mgf0__pJUmZE6OPn_kByIynB-j6CYrX-XidCqy74HqvDxZxCbhUX5-2f7HMD0ykCcPJ420D7ZiYOLExHew-NKKI6dVjLD3IU8Dvt3ErV3TzG9pbG9pFAWO-QUncAZ8cdFVoaFtz";

dbox.setAccessToken(accessToken);
{/* add link to dropbox here */}

async function listFilesInFolder(folderPath) {
    try {
        const response = await dbox.listFilesInFolder({
            path: folderPath,
        });

        const imageFiles = response.entries.filter((entry) => 
            entry.name.match(/\.(jpg|jpeg|png|gif)$/i)
        );
        
        return imageFiles;
    } catch(error) {
        console.error(error);
        throw error;
    }
}


function Index() {
    return (
        <div className={styles.index-portfolio-images}>
            {/* import images from drop box link and 'style' them */}
            <div className={styles.index-row}>
                <div className={styles.index-column}>
                    {imageFiles.slice(0,4).map((image) => (
                        <img
                            key={image.client_modified}
                            src={image.path_display}
                            alt={image.name}
                      />
                    ))};
                </div>
                <div className={styles.index-column}>
                    {imageFiles.slice(5,9).map((image) => (
                        <img
                            key={image.client_modified}
                            src={image.path_display}
                            alt={image.name}
                      />
                    ))};
                </div>
                <div className={styles.index-column}>
                    {imageFiles.slice(10,14).map((image) => (
                        <img
                            key={image.client_modified}
                            src={image.path_display}
                            alt={image.name}
                      />
                    ))};
                </div>
                <div className={styles.index-column}>
                    {imageFiles.slice(15,19).map((image) => (
                        <img
                            key={image.client_modified}
                            src={image.path_display}
                            alt={image.name}
                      />
                    ))};
                </div>
            </div>
        </div>
    );
}

export default Index;