import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { Analytics } from "@vercel/analytics/react";

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
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <meta property="og:image" content="https://www.ratemyinternship.xyz/RMI_logo_snip.JPG"></meta>
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
