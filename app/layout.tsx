import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.armacons.com"),
  title: "Arma Infrastructure",
  description: "Arma Infrastructure corporate and capability site.",
  openGraph: {
    title: "Arma Infrastructure",
    description: "Arma Infrastructure corporate and capability site.",
    siteName: "Arma Infrastructure",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/en/opengraph-image",
        alt: "Arma Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arma Infrastructure",
    description: "Arma Infrastructure corporate and capability site.",
    images: ["/en/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
