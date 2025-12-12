import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Import ฟอนต์นี้
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLI Portfolio",
  description: "Interactive Terminal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ใส่ className ของฟอนต์ลงไปที่ body */}
      <body className={mono.className}>{children}</body>
    </html>
  );
}
