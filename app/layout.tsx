import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumukh Acharya - Portfolio",
  description: "Personal portfolio website of Sumukh Acharya - Computer Science Engineering student at PES University",
  viewport:{
    width:'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen">
        {children}
      </body>
    </html>
  );
}