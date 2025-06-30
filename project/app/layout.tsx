import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});


export const metadata: Metadata = {
  title: {
    default: 'Novan株式会社', // デフォルトのタイトル
    template: '%s | Novan株式会社', // 各ページのタイトルのテンプレート
  },
  description: 'テクノロジーで常識を破壊する',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}