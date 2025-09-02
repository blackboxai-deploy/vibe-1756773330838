import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Verdant Essence | Luxury Perfume Boutique",
  description: "Discover exquisite fragrances in our luxurious green-themed perfume store. Experience the perfect blend of nature and elegance.",
  keywords: "perfume, luxury, fragrance, green, boutique, natural, elegant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-gradient-to-b from-green-50 to-white`}>
        {children}
      </body>
    </html>
  );
}