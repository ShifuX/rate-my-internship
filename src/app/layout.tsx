import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rate My Internship",
  description:
    "RateMyInternship is the place to find internship ratings from hundreds of companies submitted by people just like you!",
  applicationName: "Rate My Internship",
  keywords: [
    "Rate My Internship",
    "RateMyInternship",
    "rate my internship",
    "ratemyinternship",
    "rate internship",
    "internship",
    "internship review",
  ],
  icons: "/favicon.png",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <Head>
        <title>Rate My Internship</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico?v=2" />
      </Head>
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
