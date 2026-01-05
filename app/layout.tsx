import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "황혜영 |  Frontend Developer",
  description: "개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 페이지 전체 레이아웃 */}
        <div className="min-h-screen bg-white">
          {/* 상단 여백 + 중앙 정렬 */}
          <main className="py-12 sm:py-16 md:py-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
