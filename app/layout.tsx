import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/lib/context/AuthContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rongo Univerity Tech Community",
  description:
    "The Rongo University Tech Community is a community of passionate developers from Rongo University. We provide a platform for students to learn, collaborate, and build amazing projects together.",
  keywords:
    "Rongo University, Tech Community, programming, technology, students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
        >
          <Analytics />
          <Navbar />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
