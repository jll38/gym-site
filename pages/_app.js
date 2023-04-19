import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import Router from 'next/router';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-D8VNDF0M79', {
        page_path: url,
      });
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
