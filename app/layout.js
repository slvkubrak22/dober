"use client"

import { I18nextProvider } from 'react-i18next';
import i18next from './i18n';

import Footer from './components/Footer';
import Header from './components/Header';

import './global.scss';

export const metadata = {
  title: 'Dober',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <I18nextProvider>
      <html lang="en">
        
        <body>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
        
      </html>
    </I18nextProvider>
  )
}
