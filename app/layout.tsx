import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "拾光宠物护理店",
  description: "低压力洗护、造型修剪、皮毛养护和短期寄养的宠物护理预约页面"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
