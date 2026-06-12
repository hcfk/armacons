import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Arma Infrastructure",
  description: "Arma Infrastructure corporate and capability site.",
  icons: {
    icon: "/images/ArmaDarkBackgroundLogo.ico",
    shortcut: "/images/ArmaDarkBackgroundLogo.ico",
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
