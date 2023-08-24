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
config.autoAddCss = false; 


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
