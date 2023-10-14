import 'styles/tailwind.css';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import Script from 'next/script';
import clsx from 'clsx';

import QueryWrapper from '_wrapper/QueryWrapper';
import AuthWrapper from '_wrapper/AuthWrapper';
import { Footer } from '_components/footer/Footer';
import { Header } from '_components/header/Header';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
});

const title = '하누리 봉사회 - 환영합니다.';

export const metadata: Metadata = {
  title,
  description:
    '이웃을 사랑하는 마음으로 저소득층 아동과 장애아, 그리고 노인 등, 모든 봉사를 필요로 하는 곳에 따뜻한 손길을 내밀어 적극적인 봉사활동을 하기 위해 최선을 다하고 있습니다',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hanuri.or.kr',
    title,
    siteName: '하누리 봉사회',
    images: ['https://hanuri.or.kr/uploads/main.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={(clsx('font-sans'), roboto.variable)}>
        <QueryWrapper>
          <AuthWrapper>
            <Header />
            {children}
            <Footer />
          </AuthWrapper>
        </QueryWrapper>
      </body>
      <Script
        async={true}
        src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
        strategy="beforeInteractive"
      />
    </html>
  );
}
