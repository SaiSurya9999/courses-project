import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Made Easy",
  description: "Coding Made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
      </head>
      <body className={inter.className}>
       {children}
      </body>
    </html>
  );
}
