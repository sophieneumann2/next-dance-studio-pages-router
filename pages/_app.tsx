import NavBar from '@/components/navbar';
import { CartProvider } from '@/context/cart';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div className="max-w-7xl flex flex-col mx-auto">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}
