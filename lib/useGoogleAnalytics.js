import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useGoogleAnalytics = (trackingId) => {
  const router = useRouter();

  useEffect(() => {
    if (!trackingId) return;

    const handleRouteChange = (url) => {
      window.gtag('config', trackingId, {
        page_path: url,
      });
    };

    window.gtag('js', new Date());
    window.gtag('config', trackingId);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [trackingId, router]);
};

export default useGoogleAnalytics;
