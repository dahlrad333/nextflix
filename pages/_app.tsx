import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import "../styles/globals.css";



export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={`font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
