import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "결록 | 질문 기반 사주 리포트",
  description:
    "결록은 사주 명식을 바탕으로 기질, 관계, 직업의 흐름을 읽고 한 사람의 질문에 맞춰 보고서로 정리하는 개인 해석 서비스입니다.",
  openGraph: {
    title: "결록 | 질문 기반 사주 리포트",
    description:
      "사주 계산기가 아닌, 질문 기반 사주 리포트. 명식의 결을 읽고 삶의 방향을 기록합니다.",
    siteName: "결록",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f4eddf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
