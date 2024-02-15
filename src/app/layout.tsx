import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeButton } from "@/Components/Theme";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent Homes Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<ThemeButton /></body>
    </html>
  );
}
