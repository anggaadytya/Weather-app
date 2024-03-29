import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),
  title: "Weather App",
  description: "Generated Weather App by AnggaAdytya",
  keywords: "weather app, tailwindcss, nextjs",
  creator: "AnggaAdytya",
  authors: {
    name: "AnggaAdytya",
    url: "https://github.com/AnggaAdytya",
  },
  openGraph: {
    url: "https://my-weather-app-angga.vercel.app",
    siteName: "Weather App",
    locale: "en",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1706008318/718af308-4c5b-4ed6-be32-ab17430f6c06_rqybiy.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1706008318/718af308-4c5b-4ed6-be32-ab17430f6c06_rqybiy.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1706008318/718af308-4c5b-4ed6-be32-ab17430f6c06_rqybiy.png",
        width: 1600,
        height: 900,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
