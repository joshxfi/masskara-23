import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Navbar } from "@/components";

const ppmori = localFont({
  src: [
    {
      path: "./fonts/PPMori-Extralight.woff2",
      weight: "200",
      style: "Extralight",
    },
    {
      path: "./fonts/PPMori-Regular.woff2",
      weight: "400",
      style: "Regular",
    },
    {
      path: "./fonts/PPMori-SemiBold.woff2",
      weight: "600",
      style: "SemiBold",
    },
  ],
  variable: "--font-ppmori",
});

export const metadata: Metadata = {
  title: "Masskara 2023",
  description: "Embrace the Smiles Feel the Rhythm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ppmori.className} text-secondary-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
