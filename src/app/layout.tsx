import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import getSeoConfig from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...getSeoConfig("Page", "This is app for display your posts")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
