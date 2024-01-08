// import React from 'react';
// import styles from './styles.module.css';

// function Book() {

//     {/* THIS IS A TEMP SOLUTION */}
    
//     return (
//         <div id="checkfront-widget-wrapper" className={styles.checkfrontwidgetwrapper}>
//             <script type="text/javascript" src="//dearly-beloved-photography.checkfront.com/lib/interface--0.js" async></script>

//             <div id="CHECKFRONT_WIDGET_01">
//                 <p id="CHECKFRONT_LOADER"
//                     style="background: url('//dearly-beloved-photography.checkfront.com/images/loader.gif') left center no-repeat; padding: 5px 5px 5px 20px">
//                     Searching Availability...</p>
//             </div>
//             {
//                 new DROPLET.Widget({
//                     host: 'dearly-beloved-photography.checkfront.com',
//                     target: 'CHECKFRONT_WIDGET_01',
//                     category_id: '3',
//                     options: 'tabs',
//                     style: 'color: fff;',
//                     provider: 'droplet'
//                 }).render() 
//             }
//             <noscript>
//                 <a href="https://dearly-beloved-photography.checkfront.com/reserve/" style="font-size: 16px">Continue to
//                     Secure Booking System &raquo;</a>
//             </noscript>
//         </div>
//     );
// }

// export default Book;

import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Book = () => {
    useEffect(() => {
        // Dynamically create a script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//dearly-beloved-photography.checkfront.com/lib/interface--0.js';
        script.async = true;

        // Append the script to the document's head
        document.head.appendChild(script);

        // Cleanup function to remove the script on unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div id="checkfront-widget-wrapper" className={styles.checkfrontwidgetwrapper}>
            <div id="CHECKFRONT_WIDGET_01">
                <p id="CHECKFRONT_LOADER" style={{ background: 'url("//dearly-beloved-photography.checkfront.com/images/loader.gif") left center no-repeat', padding: '5px 5px 5px 20px' }}>
                    Searching Availability...
                </p>
            </div>
            <noscript>
                <a href="https://dearly-beloved-photography.checkfront.com/reserve/" style={{ fontSize: '16px' }}>
                    Continue to Secure Booking System &raquo;
                </a>
            </noscript>
        </div>
    );
};

export default Book;