import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEMECO 2025 | Artificial Life Perspectives",
  description:
    "Detection and Emergence of Complexity (DEMECO) 2025 - A workshop on Artificial Life perspectives, bringing together researchers and practitioners in the field of artificial life.",
  keywords: [
    "Artificial Life",
    "Complexity Science",
    "DEMECO",
    "Conference",
    "EPFL",
    "Lausanne",
    "Emergence",
    "Detection",
    "Complexity",
    "Research",
    "Science",
    "Bernoulli Center",
  ],
  authors: [
    {
      name: "Arthur Renard",
      url: "https://www.linkedin.com/in/arthur-renard-3211471b6/",
    },
  ],
  openGraph: {
    title: "DEMECO 2025 | Artificial Life Perspectives",
    description:
      "Detection and Emergence of Complexity (DEMECO) 2025 - An workshop on Artificial Life perspectives at EPFL, Lausanne.",
    url: "https://dem.eco",
    siteName: "DEMECO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEMECO 2025 | Artificial Life Perspectives",
    description:
      "Detection and Emergence of Complexity (DEMECO) 2025 - An workshop on Artificial Life perspectives at EPFL, Lausanne.",
    creator: "@demeco2025",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // You'll need to add this
  },
  icons: {
    icon: [
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "/favicons/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://dem.eco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/favicons/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
