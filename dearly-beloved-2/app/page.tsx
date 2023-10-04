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

  let content;

  switch ( page ) {
    case 'Admin':
      content = < Admin />;
    case 'Login':
      content = < Login />;
    case 'Index':
      content = < Index />;
    case 'About':
      content = < About />;
    case 'Contact':
      content = < Contact />;
    case 'Book':
      content = < Book />;
    case 'Partners':
      content = < Partners />;
  }

  return (
    <div>
      {/* make constant parts of page here */}
      {content}  
    </div>
  )
}
