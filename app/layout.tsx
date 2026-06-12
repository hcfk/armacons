import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Arma Infrastructure",
  description: "Arma Infrastructure corporate and capability site.",
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
