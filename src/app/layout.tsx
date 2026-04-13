import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "American Duct Cleaning | Professional Air Duct & HVAC Cleaning in Orange County",
  description:
    "Trusted air duct, HVAC, and dryer vent cleaning services in Orange County. Improve indoor air quality, reduce allergens, and boost system efficiency. Get a free quote today!",
  keywords: [
    "air duct cleaning",
    "HVAC cleaning",
    "dryer vent cleaning",
    "Orange County",
    "mold removal",
    "indoor air quality",
    "American Duct Cleaning",
  ],
  authors: [{ name: "American Duct Cleaning" }],
  icons: {
    icon: "/logo-icon.png",
  },
  openGraph: {
    title: "American Duct Cleaning | Orange County",
    description:
      "Professional air duct and HVAC cleaning services. Breathe cleaner air today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
