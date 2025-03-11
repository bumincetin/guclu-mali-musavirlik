import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Güçlü Mali Müşavirlik | SMMM Selma ÇETİN",
  description: "1995'ten beri Ankara'da güvenilir mali müşavirlik ve danışmanlık hizmetleri. Vergi, muhasebe ve danışmanlık ihtiyaçlarınız için profesyonel çözümler.",
  keywords: "mali müşavir, SMMM, vergi danışmanlığı, muhasebe, Ankara, mali müşavirlik, Selma ÇETİN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
