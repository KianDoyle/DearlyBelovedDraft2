import React, { useState, useEffect } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import styles from './styles.module.css';

const clientId = 'woixl1iflym0w59';
const clientSecret = 'zwm6elhd2nrlfkg'; // Replace with your app's client secret

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {

        const initiateAuth = async () => {
            const queryParams = querystring.stringify({
                response_type: 'code',
                client_id: clientId,
                redirect_uri: `${window.location.origin}${window.location.pathname}`, // Current page's path
            });

            // Redirect to Dropbox for authentication
            window.location.href = `https://www.dropbox.com/oauth2/authorize?${queryParams}`;
        };

        const processOAuthFlow = async () => {
            // Check if the URL contains the code parameter
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (code) {
                // Exchange code for access token
                const tokenUrl = 'https://api.dropboxapi.com/oauth2/token'; // Dropbox token endpoint
                const redirectUri = `${window.location.origin}${window.location.pathname}`;

                try {
                    const response = await axios.post(tokenUrl, {
                        code,
                        grant_type: 'authorization_code',
                        client_id: clientId,
                        client_secret: clientSecret,
                        redirect_uri: redirectUri,
                    });

                    const accessToken = response.data.access_token;

                    // Fetch images with the obtained access token
                    const fetchedImages = await fetchImagesFromDropbox(accessToken);
                    setImages(fetchedImages);
                } catch (error) {
                    console.error('Error fetching access token:', error);
                }
            } else {
                // If no code parameter, initiate authentication
                initiateAuth();
            }
        };

        const fetchImagesFromDropbox = async (accessToken) => {
            try {
                const response = await axios.post(
                    'https://api.dropboxapi.com/2/files/list_folder',
                    {
                        path: '/Website', // Replace with your Dropbox folder path
                        recursive: false,
                        include_media_info: true,
                        include_deleted: false,
                        include_has_explicit_shared_members: false,
                        include_mounted_folders: true,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                const imageFiles = response.data.entries;
                setImages(imageFiles); // Update state with fetched images
            } catch (error) {
                console.error('Error fetching images from Dropbox:', error);
            }
        };

        const processAuthentication = async () => {
            await processOAuthFlow();
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (!code) {
                initiateAuth();
            }
        };

        processAuthentication();
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
