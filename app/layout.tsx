import type { Metadata } from "next";
import { Inter, Orbitron, Roboto, Lora, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  metadataBase: new URL("https://circuitlabs.io"),
  title: "CircuitLabs - Quantum Resistant Blockchain Solutions",
  description: "Build secure blockchains with zero-knowledge proofs and quantum-resistant cryptography. Advanced security for Web3 and decentralized systems.",

  // Используем то что у тебя есть
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "icon",
        url: "/web-app-manifest-192x192.png", 
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon", 
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  // Соцсети
  openGraph: {
    title: "CircuitLabs",
    description: "Quantum Resistant Blockchain Solutions",
    images: [
      {
        url: "/og-image.png", // Сделаешь позже
        width: 1200,
        height: 630,
        alt: "CircuitLabs",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image", 
    images: "/twitter-image.png", // Сделаешь позже
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${roboto.variable} ${lora.variable} ${firaCode.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}