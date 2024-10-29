import type { Metadata } from "next";
import { DM_Sans, Bree_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Agency",
  description: "A Creative way to grow your Exciting Business model",
  keywords: ["Next.js", "React", "Tailwind CSS"],
  authors: [
    {
      name: "chuluq",
      url: "https://glowing-glasses.vercel.app/",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest:
    "https://creative-agency-landing-page-nq0fz2e6x-chuluqs-projects.vercel.app/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${breeSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
