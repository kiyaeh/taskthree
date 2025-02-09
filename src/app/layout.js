"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from '../store/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Provider store={store}>
         {children}
         </Provider>
       
      </body>
    </html>
  );
}
