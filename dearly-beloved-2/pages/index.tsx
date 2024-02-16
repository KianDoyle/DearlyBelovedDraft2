import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import Admin from './admin';
import Login from './login';
import Home from './home';
import About from './about';
import Contact from './contact'
import Book from './book';
import Partners from './partners';

import styles from './styles.module.css'

export default function Index() {
  const [currentContent, setCurrentContent] = useState('home');
  
  const navigate = (cont: string) => {
    setCurrentContent(cont);
  };

  let ContentComponent;
  switch (currentContent) {
    case 'home':
      ContentComponent = Home;
      break;
    case 'about':
      ContentComponent = About;
      break;
    case 'contact':
      ContentComponent = Contact;
      break;
    case 'book':
      ContentComponent = Book;
      break;
    case 'partners':
      ContentComponent = Partners;
      break;
    default:
      ContentComponent = Home;
  };

  return (
    <div className={styles.body}>
      <div id="nav" className={styles.nav}>
        <div id="logo-link" onClick={() => navigate('home')}>
          <Image 
            className={styles.logoimgtop} 
            id="logo-img" 
            src="logo-circleonly-png.png" 
            alt="logo" 
            width={100} 
            height={100}
          />
        </div>
        <ul className={styles.navlinkswrapper}>
          <li>
            <button onClick={()=> navigate('home')} className={styles.navlinks}>HOME</button>
          </li>
          <li>
            <button onClick={()=> navigate('about')} className={styles.navlinks}>ABOUT</button>
          </li>
          <li>
            <button onClick={()=> navigate('contact')} className={styles.navlinks}>CONTACT</button>
          </li>
          <li>
            <button onClick={()=> navigate('book')} className={styles.navlinks}>BOOK</button>
          </li>
          <li>
            <button onClick={()=> navigate('partners')} className={styles.navlinks}>PARTNERS</button>
          </li>
        </ul>
        <div className={styles.padding}>
            <a className={styles.instagram} href="https://www.instagram.com/dearlybelovedphotographer/" target="_blank">
                <Image 
                  src="iglogo.png" 
                  id='iglogo'
                  alt='instagram'
                  width={35} 
                  height={35}
                />
            </a>
            <a className={styles.facebook} href="https://www.facebook.com/profile.php?id=61550850638212" target="_blank">
              <Image 
                  src="fblogo.png" 
                  id='fblogo'
                  alt='facebook'
                  width={35} 
                  height={35}
                />
            </a>
        </div>
      </div>
      <div id="background" className={styles.background}>
          <Image 
            className={styles.logoimg} 
            src="logo-circleonly-png.png" 
            id='logocircle'
            alt='dearly beloved logo'
            width={700}
            height={680}
          />
          <Image 
            className={styles.logotext} 
            src="logo-textonly-png.png" 
            id='logotext'
            alt='dearly beloved logo text'
            width={700}
            height={100}
          />
      </div>
      <div style={{overflow: 'hidden'}}>
        <ContentComponent />
      </div>
    </div>
  )
}
