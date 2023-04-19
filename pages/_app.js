import { useEffect } from "react";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../lib/analytics";
import { ChakraProvider } from "@chakra-ui/react";
import useGoogleAnalytics from "../lib/useGoogleAnalytics";

function MyApp({ Component, pageProps }) {

  useGoogleAnalytics('G-D8VNDF0M79');

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
