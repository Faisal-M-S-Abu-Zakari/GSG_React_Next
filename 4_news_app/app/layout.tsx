import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Roboto, Mulish } from 'next/font/google';
import classNames from "classnames";

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--font-roboto'
});

const mulishFont = Mulish({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--font-mulish'
});

export const metadata: Metadata = {
  title: "GSG News",
  description: "GSG News, get latest news around the world"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // We used the .variable as class name (not .className) to pass the css variable :) 
    <html lang="en" className={classNames(mulishFont.variable, robotoFont.variable)}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
