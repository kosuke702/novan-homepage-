'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/ガラス割れ.jpg"
          alt="Breaking Glass Background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-center space-y-12"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl hero-text"
          >
            Break The Mold
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl md:text-4xl hero-subtitle"
          >
            常に世界に変革を
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-2xl md:text-4xl hero-subtitle"
          >
            テクノロジーで常識を破壊する
          </motion.p>
        </motion.div>
      </section>

      {/* Product Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              広告生成の常識を変える、次世代のAIソリューション
            </h2>
            <p className="text-xl text-gray-600">
              AIが全工程を自動化、時間もコストも大幅に削減しながら高品質な広告を作成します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '専門知識必要なし',
                description: '直感的なインターフェースで、誰でも簡単に高品質な広告を作成できます。',
              },
              {
                title: 'コストは従来の10分の1',
                description: '自動化により大幅なコスト削減を実現。広告予算を効率的に活用できます。',
              },
              {
                title: '最短5分で完成',
                description: 'AIによる高速処理で、アイデアから完成までわずか5分。スピーディーな展開が可能です。',
              },
              {
                title: 'PDCAを最短で回せる',
                description: '素早い改善サイクルで、より効果的な広告運用を実現します。',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              >
                <Link href="/services" className="block h-full">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-8">次世代の広告生成を体験する</h2>
            <Button asChild size="lg">
              <Link href="/services" className="text-lg">
                サービスを詳しく見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}