import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Picture Daily",
  description:
    "Discover a new cat picture every day. Visit for your daily dose of feline cuteness and brighten up your day with charming cat photos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          defer
          src="https://umami.catpicturedaily.com/script.js"
          data-website-id="ee66bdf5-3765-4121-8d5f-485fac9a6207"
        />
        {children}
      </body>
    </html>
  );
}
