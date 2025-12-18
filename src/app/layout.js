import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsappIcon";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata = {
  title: "DS' Painting Services | Residential & Commercial Painting",
  description:
    "DS' Painting Services provides professional residential and commercial painting services, including interior painting, exterior painting, and furniture staining across Toronto and surrounding areas.",

  keywords:
    "DS Painting Services, painting services, residential painting, commercial painting, interior painting, exterior painting, furniture staining, Toronto, Canada",

  openGraph: {
    title: "DS' Painting Services | Residential & Commercial Painting",
    description:
      "Professional residential and commercial painting services in Toronto. We specialize in interior painting, exterior painting, and furniture staining with high-quality finishes.",
    url: "https://www.dspaintingservices.com",
    siteName: "DS' Painting Services",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "DS' Painting Services – Professional Residential & Commercial Painting",
      },
    ],
    type: "website",
  },

  alternates: {
    canonical: "https://www.dspaintingservices.com",
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "google-site-verification": "T8Hx9YQS-t3yBk5PxPM4DHnGNvnaCs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <WhatsAppIcon />
        <Footer />
      </body>
    </html>
  );
}
