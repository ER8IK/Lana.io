import type { Metadata } from "next";
import { Inter, Orbitron, Roboto, Lora, Fira_Code } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

const siteUrl = "https://circuitlabs.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CircuitLabs - Quantum Resistant Blockchain Solutions",
    template: "%s | CircuitLabs"
  },
  description: "Build secure blockchains with zero-knowledge proofs and quantum-resistant cryptography. Advanced security for Web3 and decentralized systems.",

  // Улучшенные иконки
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

  // Улучшенные Open Graph теги для Telegram
  openGraph: {
    title: "CircuitLabs - Quantum Resistant Blockchain Solutions",
    description: "Build secure blockchains with zero-knowledge proofs and quantum-resistant cryptography. Advanced security for Web3 and decentralized systems.",
    images: [
      {
        url: "/images/telegram-preview.png", // Создайте это изображение!
        width: 1200,
        height: 630,
        alt: "CircuitLabs - Quantum Resistant Blockchain Solutions",
      },
    ],
    type: "website",
    siteName: "CircuitLabs",
    url: siteUrl,
    locale: "en_US",
  },

  // Улучшенные Twitter Card теги
  twitter: {
    card: "summary_large_image", 
    creator: "@circuitlabs", // Добавьте ваш Twitter аккаунт
    title: "CircuitLabs - Quantum Resistant Blockchain Solutions",
    description: "Build secure blockchains with zero-knowledge proofs and quantum-resistant cryptography.",
    images: ["/images/telegram-preview.png"], // То же изображение
  },

  // Дополнительные мета-теги
  other: {
    "og:logo": `${siteUrl}/images/telegram-preview.png`,
    "twitter:logo": `${siteUrl}/images/telegram-preview.png`,
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "CircuitLabs - Quantum Resistant Blockchain Solutions",
  },

  // Добавлены keywords для SEO
  keywords: [
    "quantum cryptography",
    "blockchain security", 
    "zero-knowledge proofs",
    "post-quantum encryption",
    "Web3 security",
    "quantum resistant blockchain",
    "cryptography solutions"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${roboto.variable} ${lora.variable} ${firaCode.variable}`}
    >
      <head>
        <StructuredData />
        
        {/* Дополнительные мета-теги для Telegram и мобильных устройств */}
        <meta name="theme-color" content="#0a0c16" />
        <meta name="msapplication-TileColor" content="#0a0c16" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Каноническая ссылка */}
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}