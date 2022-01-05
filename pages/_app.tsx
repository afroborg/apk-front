import type { AppProps } from 'next/app';
import GoogleAnalytics from '../components/google-analytics';
import Navbar from '../components/layout/navbar';
import '../styles/base.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <div>
        <Navbar path={router.pathname} />

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
