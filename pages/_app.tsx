import type { AppProps } from 'next/app';
import Navbar from '../components/layout/navbar';
import '../styles/base.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Navbar path={router.pathname} />

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
