import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Seattle Dojo — North America's First Judo Dojo",
    template: "%s | Seattle Dojo",
  },
  description:
    "Training in the gentle way since the early 1900s. Seattle Dojo offers judo classes for kids and adults six days a week in Seattle's International District.",
  keywords: [
    "judo",
    "Seattle",
    "martial arts",
    "dojo",
    "judo classes",
    "kids judo",
    "International District",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
