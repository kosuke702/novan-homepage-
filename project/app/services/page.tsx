'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  FileInput,
  MousePointerClick,
  Play,
  Share2,
  ArrowRightCircle,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import Image from 'next/image';

const problemSolutionPairs = [
  {
    problem: "高コスト",
    solution: "自動化によるコスト削減",
  },
  {
    problem: "制作期間の長さ",
    solution: "高速なコンテンツ作成",
  },
  {
    problem: "人材不足・スキル不足",
    solution: "専門スキル不要の簡便さ",
  },
  {
    problem: "品質維持・改善の難しさ",
    solution: "品質とクリエイティビティの両立",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Page Title */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/ガラス割れ.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative py-8 flex items-center justify-center min-h-[200px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-white"
          >
            広告動画生成の常識を変える、次世代のAIソリューション
          </motion.h1>
        </div>
      </div>

      {/* Challenges and Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            広告動画作成における既存の課題とその解決策
          </motion.h2>

          <div className="space-y-12">
            {problemSolutionPairs.map((pair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 items-center"
              >
                <Card className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-red-500 mb-4 md:mb-0">
                  <h3 className="flex items-center justify-center text-2xl font-semibold text-gray-800 text-center">
                    <XCircle className="w-7 h-7 text-red-500 mr-2" />
                    {pair.problem}
                  </h3>
                </Card>

                <div className="hidden md:flex justify-center items-center">
                  <ArrowRightCircle className="w-12 h-12 text-gray-400" />
                </div>

                <Card className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-500">
                  <h3 className="flex items-center justify-center text-2xl font-semibold text-gray-800 text-center">
                    <CheckCircle2 className="w-7 h-7 text-green-500 mr-2" />
                    {pair.solution}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            活用事例
          </motion.h2>

          <Tabs defaultValue="case1" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="case1">自社製品のプロモーション動画</TabsTrigger>
              <TabsTrigger value="case2">広告代理店の大量クリエイティブ生成</TabsTrigger>
              <TabsTrigger value="case3">自社サービスのイメージビデオ</TabsTrigger>
            </TabsList>

            <TabsContent value="case1">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">自社製品のプロモーション動画</h3>
                    <p className="text-gray-700 mb-6">
                      商品写真・ロゴ・訴求ポイント（箇条書き）を入力することで、プロモーションビデオを作成。ECサイトやSNS向けに、複数尺／アスペクト比を自動作成。
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        商品特徴の強調
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        複数アスペクト比の自動生成
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        ECサイト用動画の作成
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        急な仕様変更にも対応
                      </li>
                    </ul>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg"
                      alt="Product promotion video creation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="case2">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">広告代理店の大量クリエイティブ生成</h3>
                    <p className="text-gray-700 mb-6">
                      1日で数十本のA/Bテスト用クリエイティブを準備可能。追加撮影ゼロ・外注ゼロで「提案→即素材提出」を実現。
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        大量生成の効率化
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        A/Bテスト素材の準備
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        提案〜提出の時間短縮
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        外注コスト削減
                      </li>
                    </ul>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg"
                      alt="Creative team working on digital content"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="case3">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">自社サービスのイメージビデオ</h3>
                    <p className="text-gray-700 mb-6">
                      サービス理念やキーワード、ブランドカラーを指定すると、抽象的なシネマティック映像とキーフレーズが流れるブランディングPVを生成。
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        ブランドイメージの視覚化
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        抽象的なコンセプト表現
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        展示会・イベント用映像
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        自社SNS向けブランディング映像
                      </li>
                    </ul>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg"
                      alt="Brand image video creation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Flow Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            サービス利用の流れ
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 'Step 1',
                title: '情報の入力',
                description: '題材/目的/ターゲット等の情報を入力',
                icon: FileInput,
              },
              {
                step: 'Step 2',
                title: '構成案を選択',
                description: 'AIが3案を提示→ベストな1案をクリック',
                icon: MousePointerClick,
              },
              {
                step: 'Step 3',
                title: 'AIが5分で動画を生成',
                description: '約5分で動画と共有リンクが生成されます',
                icon: Play,
              },
              {
                step: 'Step 4',
                title: 'ダウンロード/共有',
                description: '完成した動画をダウンロードまたはSNSに直接投稿',
                icon: Share2,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      {step.icon && <step.icon className="w-8 h-8 text-green-600" />}
                    </div>
                    <div className="text-4xl font-bold text-green-500 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-4xl text-gray-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button size="lg" className="text-lg">
              無料でお試し
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}