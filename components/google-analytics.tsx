import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react';
import { config } from '../config';
import { pageview } from '../helpers/ga.helpers';

const GoogleAnalytics: React.FC = () => {
  const { GA_TRACKING_ID } = config;

  if (process.env.NODE_ENV !== 'production' || !GA_TRACKING_ID) {
    return null;
  }

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', '${GA_TRACKING_ID}', {
				page_path: window.location.pathname,
			  });
		`,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
