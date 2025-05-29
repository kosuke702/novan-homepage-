import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Novan_黒.png"
                alt="Novan株式会社"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h3 className="text-lg font-bold">Novan株式会社</h3>
            </div>
            <p className="text-sm text-gray-600">
              テクノロジーで常識を破壊する
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">ホーム</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">サービス紹介</Link></li>
              <li><Link href="/company" className="text-sm text-gray-600 hover:text-gray-900">会社概要</Link></li>
              <li><Link href="/news" className="text-sm text-gray-600 hover:text-gray-900">お知らせ</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">お問い合わせ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">プライバシーポリシー</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">所在地</h4>
            <p className="text-sm text-gray-600">
              〒150-0042<br />
              東京都渋谷区宇田川町14-13<br />
              宇田川町ビルディング3階
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Novan株式会社 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}