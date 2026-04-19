import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toby | Personal Site",
  description: "个人主页与光影画廊",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}