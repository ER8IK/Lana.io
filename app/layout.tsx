import type { Metadata } from "next";
import { Inter, Orbitron, Roboto, Lora, Fira_Code } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./components/StructuredData"; // добавь этот импорт

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  metadataBase: new URL("https://circuitlabs.io"),
  title: {
    default: "CircuitLabs - Quantum Resistant Blockchain Solutions",
    template: "%s | CircuitLabs"
  },
  description: "Build secure blockchains with zero-knowledge proofs and quantum-resistant cryptography. Advanced security for Web3 and decentralized systems.",

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

  // Добавь явное указание логотипа
  other: {
    "og:logo": "https://circuitlabs.io/web-app-manifest-512x512.png",
    "twitter:logo": "https://circuitlabs.io/web-app-manifest-512x512.png",
  },

  openGraph: {
    title: "CircuitLabs",
    description: "Quantum Resistant Blockchain Solutions",
    images: [
      {
        url: "/web-app-manifest-512x512.png", // временно используй существующую иконку
        width: 512,
        height: 512,
        alt: "CircuitLabs Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image", 
    images: "/web-app-manifest-512x512.png", // временно используй существующую иконку
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${roboto.variable} ${lora.variable} ${firaCode.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}