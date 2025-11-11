// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Orbitron, Roboto, Lora, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400","700","900"], variable: "--font-orbitron" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400","700"], variable: "--font-roboto" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "CircuitLabs",
  description: "Quantum Resistant Blockchain Solutions",
  icons: {
    icon: "/LogoCircuit.ico",
    apple: "/LogoCircuit.png",
    other: [
      { url: "/LogoCircuit.png", type: "image/png", sizes: "192x192" },
      { url: "/LogoCircuit.png", type: "image/png", sizes: "512x512" }
    ]
  },
  openGraph: {
    title: "CircuitLabs",
    description: "Quantum Resistant Blockchain Solutions",
    url: "https://circuitlabs.io/",
    siteName: "CircuitLabs",
    images: [
      { url: "https://circuitlabs.io/LogoCircuit.png", width: 1200, height: 630, alt: "CircuitLabs Logo" }
    ],
    type: "website",
  },
  
  metadataBase: new URL("https://circuitlabs.io"), // базовый URL для относительных ссылок
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${roboto.variable} ${lora.variable} ${firaCode.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
