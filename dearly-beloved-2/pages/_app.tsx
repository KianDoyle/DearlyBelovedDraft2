import { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Additional setup or context providers can go here

  return <Component {...pageProps} />;
}

export default MyApp;