import React from 'react';
import { useRouter } from 'next/router';
import Admin from './admin';
import Login from './login';
import Index from './index';
import About from './about';
import Contact from './contact'
import Book from './book';
import Partners from './partners';

export default function Home() {
  
  const router = useRouter();
  const { page } = router.query;

  const handleNavigation = (newPage: string) => {
    router.push(`/${newPage}`);
  };

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
      <div id="logo">
        {/* add logo image here */}
      </div>
      <div id="nav">
        <ul>
          <li>
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
          </li>
        </ul>
        <div>
          <a href="" target="_blank">
            <img src=""/>
          </a>
          <a href="" target="_blank">
            <img src=""/>
          </a>
        </div>
      </div>
      <div id="background">
        {/* add background image here */}
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}
