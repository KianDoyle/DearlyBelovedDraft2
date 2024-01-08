import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Admin from './admin';
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

  // const { page } = router.query;

  // const handleNavigation = (newPage: string) => {
  //   router.push(`/${newPage}`);
  // };

  // let content;

  // switch ( page ) {
  //   case 'Admin':
  //     content = < Admin />;
  //     break;
  //   case 'Login':
  //     content = < Login />;
  //     break;
  //   case 'Index':
  //     content = < Home />;
  //     break;
  //   case 'About':
  //     content = < About />;
  //     break;
  //   case 'Contact':
  //     content = < Contact />;
  //     break;
  //   case 'Book':
  //     content = < Book />;
  //     break;
  //   case 'Partners':
  //     content = < Partners />;
  //     break; 
  //   default: 
  //     content = < Index />;
  // }

  const pageComponents : { [key: string]: React.ReactElement} = {
    Admin: <Admin />,
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
        <img className={styles.logoimgtop} id="logo-img" src="../public/logo - circle only-png.png" alt="logo" width="100px" height="100px"></img>
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
                <img src="../public/iglogo.png" width="35px" height="35px"></img>
            </a>
            <a className={styles.facebook} href="https://www.facebook.com/profile.php?id=61550850638212" target="_blank">
                <img src="../public/fblogo.png" width="35px" height="35px"></img>
            </a>
        </div>
      </div>
      <div id="background" className={styles.background}>
          <img className={styles.logoimg} src="../public/logo - circle only-png.png" width="700px"></img>
          <img className={styles.logotext} src="../public/logo - text only-png.png" width="700px"></img>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}
