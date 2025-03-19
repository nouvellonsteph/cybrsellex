import type { Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CYBRSELLEX - Your Trusted Cybersecurity Reseller",
  description: "Cybrsellex connects enterprises with top cybersecurity vendors, offering reselling, market expansion, and tailored security solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${raleway.variable}`}>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
