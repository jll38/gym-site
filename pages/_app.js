import { useEffect } from "react";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../lib/analytics";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    router.events.on("routeChangeComplete", logPageView);

    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
