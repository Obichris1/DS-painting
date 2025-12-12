import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsappIcon";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DS' Painting Services | Residential & commercial painting ",
  description:
    "Discover Joe Karter's premium leather and active wear products. Shop high-quality collections designed for style, durability, and comfort.",
  keywords:
    "Ds', painting, interior painting, exterior painting, furniture staining, Toronto, Canada",

  openGraph: {
    title: "Ds' Painting Services | Residential & commercial painting",
    description:
      "Explore Joe Karter's exclusive range of leather and active wear collections crafted for elegance and comfort.",
    url: "https://www.dspaintingservices.com",
    siteName: "Ds Painting Services",
    images: [
      {
        url: "/thumbnail.png", // ensure this is inside /public
        width: 1200,
        height: 630,
        alt: "Joe Karter - Premium leather & active wears",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          {children}
          <WhatsAppIcon />
          <Footer />
      </body>
    </html>
  );
}
