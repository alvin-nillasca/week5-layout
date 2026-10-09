import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Week 5 - Data Dashboard",
  description: "Next.js Data Dashboard built with Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <header className="bg-indigo-600 text-white p-4 font-bold text-lg shadow-md">
          Dashboard Portal
        </header>
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}