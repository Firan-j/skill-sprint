import type { Metadata } from "next";
import { Inter, Robot_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// page metadata
export const metadata: Metadata = {
  title: "Language Helper | Learn Smarter",
  description: "a powerfull tool to assist in language learning, built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
