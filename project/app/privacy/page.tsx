'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          プライバシーポリシー
        </motion.h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. 個人情報の取り扱いについて</h2>
            <p>
              Novan株式会社（以下「当社」）は、個人情報の重要性を認識し、個人情報の保護に関する法律、その他の関連法令を遵守し、個人情報の適切な取り扱いに努めます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. 収集する個人情報の範囲</h2>
            <p>当社が収集する個人情報は以下の通りです：</p>
            <ul className="list-disc pl-6 mt-4">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>会社名</li>
              <li>その他、サービス提供に必要な情報</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用いたします：</p>
            <ul className="list-disc pl-6 mt-4">
              <li>サービスの提供および運営</li>
              <li>お問い合わせへの対応</li>
              <li>新サービスの開発および改善</li>
              <li>キャンペーンや新製品の案内</li>
              <li>統計データの作成</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. 個人情報の管理</h2>
            <p>
              当社は、個人情報の正確性および安全性を確保するために、セキュリティ対策を実施し、個人情報の漏洩、滅失またはき損の防止に努めます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. 個人情報の第三者提供</h2>
            <p>
              当社は、法令に基づく場合を除き、個人情報を事前に本人の同意を得ることなく第三者に提供いたしません。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトでお知らせいたします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. お問い合わせ</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください：
            </p>
            <div className="mt-4">
              <p>Novan株式会社</p>
              <p>〒150-0042</p>
              <p>東京都渋谷区宇田川町14-13</p>
              <p>宇田川町ビルディング3階</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}