import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Admin from './admin';
import Login from './login';
import Index from './index';
import About from './about';
import Contact from './contact'
import Book from './book';
import Partners from './partners';

import styles from '../app/styles.module.css'

export default function Home() {
  
  const router = useRouter();
  const page = usePathname();

  // const { page } = router.query;

  // const handleNavigation = (newPage: string) => {
  //   router.push(`/${newPage}`);
  // };

  let content;

  switch ( page ) {
    case 'Admin':
      content = < Admin />;
      break;
    case 'Login':
      content = < Login />;
      break;
    case 'Index':
      content = < Index />;
      break;
    case 'About':
      content = < About />;
      break;
    case 'Contact':
      content = < Contact />;
      break;
    case 'Book':
      content = < Book />;
      break;
    case 'Partners':
      content = < Partners />;
      break; 
    default: 
      content = < Index />;
  }

  return (
    <div>
      <div id="logo-link">
        <img className={styles.logoimgtop} id="logo-img" src="../app/public/logo - circle only-png.png" alt="logo" width="100px" height="100px"></img>
      </div>
      <div id="nav" className={styles.nav}>
        <ul>
          {/* <li>
            <button onClick={()=> handleNavigation('index')}>HOME</button>
          </li>
          <li>
            <button onClick={()=> handleNavigation('about')}>ABOUT</button>
          </li>
          <li>
            <button onClick={()=> handleNavigation('contact')}>CONTACT</button>
          </li>
          <li>
            <button onClick={()=> handleNavigation('book')}>BOOK</button>
          </li>
          <li>
            <button onClick={()=> handleNavigation('partners')}>PARTNERS</button>
          </li> */}
          <li>
            <button onClick={()=> router.push('/index')}>HOME</button>
          </li>
          <li>
            <button onClick={()=> router.push('/about')}>ABOUT</button>
          </li>
          <li>
            <button onClick={()=> router.push('/contact')}>CONTACT</button>
          </li>
          <li>
            <button onClick={()=> router.push('/book')}>BOOK</button>
          </li>
          <li>
            <button onClick={()=> router.push('/partners')}>PARTNERS</button>
          </li>
        </ul>
        <div className={styles.padding}>
            <a className={styles.instagram} href="https://www.instagram.com/dearlybelovedphotographer/" target="_blank">
                <img src="../app/public/iglogo.png" width="35px" height="35px"></img>
            </a>
            <a className={styles.facebook} href="https://www.facebook.com/profile.php?id=61550850638212" target="_blank">
                <img src="../app/public/fblogo.png" width="35px" height="35px"></img>
            </a>
        </div>
      </div>
      <div id="background" className={styles.background}>
          <img className={styles.logoimg} src="../app/public/logo - circle only-png.png" width="700px"></img>
          <img className={styles.logotext} src="../app/public/logo - text only-png.png" width="700px"></img>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}
