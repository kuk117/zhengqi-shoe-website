import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import MotionShell from "./components/MotionShell";

export const metadata: Metadata = {
  title: "莆田正奇鞋业咨询 | 鞋厂管理改善与经营升级顾问",
  description: "面向鞋厂老板、经营管理团队和鞋类品牌客户，提供现场诊断、改善方案、陪跑落地和经营复盘服务。",
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
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-16 md:pt-[72px]">
          <MotionShell>{children}</MotionShell>
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
