import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Picture Daily",
  description: "Discover a new cat picture every day. Visit for your daily dose of feline cuteness and brighten up your day with charming cat photos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="http://umami-c80wsck.5.161.97.168.sslip.io/script.js" data-website-id="ee66bdf5-3765-4121-8d5f-485fac9a6207"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
