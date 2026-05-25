import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/config/links";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "결록 | 명식의 결을 기록하는 사주 리포트",
  description:
    "기질, 커리어, 관계의 반복되는 결을 문서형 리포트로 정리합니다. 좋고 나쁨보다 다시 선택할 수 있는 언어로 읽는 사주 해석 브랜드입니다.",
  keywords: [
    "결록",
    "사주 리포트",
    "사주 상담",
    "사주 해석",
    "기질 리포트",
    "커리어 사주",
    "궁합 리포트",
    "관계 궁합",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "결록 | 명식의 결을 기록하는 사주 리포트",
    description: "기질, 커리어, 관계의 반복되는 결을 문서형 리포트로 정리합니다.",
    url: SITE_URL,
    siteName: "결록",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "결록 | 명식의 결을 기록하는 사주 리포트",
    description: "기질, 커리어, 관계의 반복되는 결을 문서형 리포트로 정리합니다.",
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
