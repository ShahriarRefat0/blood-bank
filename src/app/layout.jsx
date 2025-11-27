"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../public/Components/Navbar";
import Footer from "../../public/Components/Footer";
import AuthProvider from "@/context/AuthContext";
import QueryProvider from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <QueryProvider>
          <AuthProvider>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
