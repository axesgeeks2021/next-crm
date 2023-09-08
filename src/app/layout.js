import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer } from 'react-toastify';

import "../styles/style.css"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from 'next/head';
config.autoAddCss = false;


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-StartupIndia - We Shape your ideas into business',
  description: 'e-startupindia.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <body className={inter.className}>
        <ToastContainer position="top-right" newestOnTop />
        <Header />
        {children}
        <Footer />
        <script src="https://checkout.razorpay.com/v1/checkout.js" defer></script>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" defer></script>
      </body>
    </html>
  )
}
