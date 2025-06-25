'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function NewsPage() {
  const newsItems = [
    {
      date: '2025.06.01',
      category: 'お知らせ',
      title: '株式会社Novanを設立しました',
    },
    {
      date: '2024.04.01',
      category: 'プレスリリース',
      title: 'AI動画生成サービスの提供を開始',
    },
    {
      date: '2024.03.15',
      category: 'お知らせ',
      title: '本社オフィスを渋谷に移転',
    },
    {
      date: '2024.02.01',
      category: 'プレスリリース',
      title: '資金調達を実施',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          お知らせ
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="text-gray-500">{item.date}</div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm w-fit">
                    {item.category}
                  </div>
                  <div className="font-medium">{item.title}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}