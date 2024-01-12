import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

// import Admin from './admin';
import Login from './login';
import Home from './home';
import About from './about';
import Contact from './contact'
import Book from './book';
import Partners from './partners';

import styles from './styles.module.css'

export default function Index() {
  
  const router = useRouter();
  const page = usePathname();

  const pageComponents : { [key: string]: React.ReactElement} = {
    // Admin: <Admin />,
    Login: <Login />,
    Index: <Home />,
    About: <About />,
    Contact: <Contact />,
    Book: <Book />,
    Partners: <Partners />,
  };
  
  const content = pageComponents[page] || <Home />;
 
  return (
    <div>
      <div id="logo-link">
        <Image 
          className={styles.logoimgtop} 
          id="logo-img" 
          src="/logo - circle only-png.png" 
          alt="logo" 
          width={100} 
          height={100}
        />
      </div>
      <div id="nav" className={styles.nav}>
        <ul className={styles.navlinkswrapper}>
          <li>
            <button onClick={()=> router.push('/index')} className={styles.navlinks}>HOME</button>
          </li>
          <li>
            <button onClick={()=> router.push('/about')} className={styles.navlinks}>ABOUT</button>
          </li>
          <li>
            <button onClick={()=> router.push('/contact')} className={styles.navlinks}>CONTACT</button>
          </li>
          <li>
            <button onClick={()=> router.push('/book')} className={styles.navlinks}>BOOK</button>
          </li>
          <li>
            <button onClick={()=> router.push('/partners')} className={styles.navlinks}>PARTNERS</button>
          </li>
        </ul>
        <div className={styles.padding}>
            <a className={styles.instagram} href="https://www.instagram.com/dearlybelovedphotographer/" target="_blank">
                <Image 
                  src="/iglogo.png" 
                  id='iglogo'
                  alt='instagram'
                  width={35} 
                  height={35}
                />
            </a>
            <a className={styles.facebook} href="https://www.facebook.com/profile.php?id=61550850638212" target="_blank">
              <Image 
                  src="/fblogo.png" 
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
            src="/logo - circle only-png.png" 
            id='logocircle'
            alt='dearly beloved logo'
            width={700}
            height={700}
          />
          <Image 
            className={styles.logoimg} 
            src="/logo - text only-png.png" 
            id='logotext'
            alt='dearly beloved logo text'
            width={700}
            height={200}
          />
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}
