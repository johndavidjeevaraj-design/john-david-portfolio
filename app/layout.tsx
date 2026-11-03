import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John David Jeevaraj | Full Stack Developer",
  description:
    "Portfolio of John David Jeevaraj, an Information Technology graduate building full-stack web applications, e-commerce platforms and interactive digital experiences.",
  applicationName: "John David Jeevaraj Portfolio",
  keywords: [
    "John David Jeevaraj",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Hosur",
    "Tamil Nadu",
  ],
  authors: [{ name: "John David Jeevaraj" }],
  creator: "John David Jeevaraj",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "John David Jeevaraj | Full Stack Developer",
    description:
      "Explore selected full-stack projects, technical skills and digital experiences built by John David Jeevaraj.",
    siteName: "John David Jeevaraj Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
    title: "John David Jeevaraj | Full Stack Developer",
    description:
      "Full-stack projects, technical skills and digital experiences by John David Jeevaraj.",
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
