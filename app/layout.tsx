import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Wael Karbelkar | AI/ML Developer · Computer Vision · Creative Technologist",
  description: "I build intelligent, real-world AI systems and creative digital experiences. AI/ML Developer specializing in Computer Vision, YOLO, Multi-Agent AI, and Full-Stack Development.",
  keywords: ["AI/ML Developer", "Computer Vision", "YOLO", "FastAPI", "Multi-Agent AI", "Python", "React", "Creative Technologist"],
  authors: [{ name: "Wael Karbelkar" }],
  creator: "Wael Karbelkar",
  publisher: "Wael Karbelkar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waelkarbelkar.dev",
    siteName: "Wael Karbelkar Portfolio",
    title: "Wael Karbelkar | AI/ML Developer · Computer Vision · Creative Technologist",
    description: "I build intelligent, real-world AI systems and creative digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wael Karbelkar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wael Karbelkar | AI/ML Developer",
    description: "I build intelligent, real-world AI systems and creative digital experiences.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}