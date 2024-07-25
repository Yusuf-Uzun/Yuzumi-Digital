import type { AppProps } from "next/app";
import "@/styles/globals.css";
import localFont from 'next/font/local';
import Header from "./components/Header";
import ScrollBar from "./components/ScrollBar";

const neueMontreal = localFont({
  src: '../../public/fonts/NeueMontreal-Bold.ttf',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={neueMontreal.className}>
      <ScrollBar />
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
