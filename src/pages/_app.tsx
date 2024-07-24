import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Header from "./components/Header";
import localFont from 'next/font/local'

const neueMontreal = localFont({
  src: '../../public/fonts/NeueMontreal-Bold.ttf',
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={neueMontreal.className}>
      <Header/>
      <Component {...pageProps} />
    </main>
  );
}
