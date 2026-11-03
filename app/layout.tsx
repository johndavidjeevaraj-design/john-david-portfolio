
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOHNDAVID JEEVARAJ — Creative Technologist",
  description:
    "Building digital products, expressive interfaces and interactive experiences.",
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
