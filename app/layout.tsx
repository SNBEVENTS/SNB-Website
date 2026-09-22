import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.snbagency.com"),
  title: "SNB Events Agency | Corporate Events",
  description:
    "SNB Events Agency designs, produces, and executes high-end corporate events: offsites, retreats, brand activations, and product launches.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "SNB Events Agency | Corporate Events",
    description:
      "SNB Events Agency designs, produces, and executes high-end corporate events: offsites, retreats, brand activations, and product launches.",
    url: "https://www.snbagency.com",
    siteName: "SNB Events Agency",
    images: [
      {
        url: "/agency.JPG",
        width: 1200,
        height: 630,
        alt: "SNB Event Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SNB Events Agency | Corporate Events",
    description:
      "SNB Events Agency designs, produces, and executes high-end corporate events: offsites, retreats, brand activations, and product launches.",
    images: ["/agency.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-parchment">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
