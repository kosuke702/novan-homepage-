'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { newsItems } from '@/lib/news-data'; // ★ インポート先を新しいファイルに変更します

export default function NewsPage() {
  // ★ newsItemsの定義は別のファイルに移動したので、ここからは削除します

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
            <Link key={item.slug} href={`/news/${item.slug}`} passHref>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="text-gray-500">{item.date}</div>
                    <div className="px-3 py-1 bg-gray-100 rounded-full text-sm w-fit">
                      {item.category}
                    </div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}