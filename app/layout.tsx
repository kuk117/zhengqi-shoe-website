import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";

export const metadata: Metadata = {
  title: "莆田正奇鞋业咨询 - 专业鞋业全产业链咨询服务",
  description: "深耕鞋业产业9年，专注市场调研、品牌战略规划、供应链优化，已服务100+企业客户。",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
