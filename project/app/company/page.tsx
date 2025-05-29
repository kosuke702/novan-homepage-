'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function CompanyPage() {
  const executives = [
    {
      name: '池内大翔',
      nameEn: 'Hiroto Ikeuchi',
      position: '代表取締役社長',
    },
    {
      name: '河内友希',
      nameEn: 'Yuki Kawachi',
      position: '取締役副社長',
    },
    {
      name: '久米凱斗',
      nameEn: 'Kaito Kume',
      position: '取締役',
    },
    {
      name: '森下拓紀',
      nameEn: 'Takunori Morishita',
      position: '取締役',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Executives Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            役員紹介
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full" />
                  <h3 className="text-xl font-bold mb-1">{executive.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{executive.nameEn}</p>
                  <p className="text-gray-600">{executive.position}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            会社概要
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <dl className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold">会社名</dt>
                  <dd className="md:col-span-2">Novan株式会社</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold">本社所在地</dt>
                  <dd className="md:col-span-2">
                    〒150-0042<br />
                    東京都渋谷区宇田川町14-13<br />
                    宇田川町ビルディング3階
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold">アクセス</dt>
                  <dd className="md:col-span-2">JR渋谷駅より徒歩5分</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold">最寄駅</dt>
                  <dd className="md:col-span-2">渋谷駅（JR・東急・東京メトロ）</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold">資本金</dt>
                  <dd className="md:col-span-2">100万円</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold">代表取締役</dt>
                  <dd className="md:col-span-2">池内大翔</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold">設立</dt>
                  <dd className="md:col-span-2">2024年12月</dd>
                </div>
              </dl>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            MAP
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754722366!2d139.69663687677415!3d35.66021017259611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca9c5de589f%3A0x3964439a2c6f148c!2z44CSMTU0LTAwNDIg5p2x5Lqs6YO95riL6LC35Yy65a6H55Sw5bed55S677yR77yU4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1707298023899!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}