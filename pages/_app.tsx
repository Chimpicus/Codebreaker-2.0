import React from 'react';
import '../styles/globals.css';
import '../styles/output.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className='w-screen h-screen bg-gray-600'>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
