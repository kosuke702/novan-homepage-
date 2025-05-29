'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileInput, MousePointerClick, Play, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Page Title */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/ガラス割れる copy.jpg"
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 border-red-200 bg-red-50">
                <h3 className="text-xl font-semibold text-red-700 mb-4">高コスト</h3>
                <p className="text-gray-700">
                  プロの映像制作で、撮影、編集で多額の費用がかかる。外部の制作会社に依頼すると、30秒程度の動画でも数十万円以上かかるケースがあり、頻繁に動画を作成・更新するのは難しい。
                </p>
              </Card>

              <Card className="p-6 border-red-200 bg-red-50">
                <h3 className="text-xl font-semibold text-red-700 mb-4">制作期間の長さ</h3>
                <p className="text-gray-700">
                  企画から納品までに数週間から数ヶ月かかることも珍しくなく、スピード感を持ってマーケティング施策を展開する妨げになっている。特にトレンドの移り変わりが早いSNS広告では、制作の遅さが機会損失に直結してしまう。
                </p>
              </Card>

              <Card className="p-6 border-red-200 bg-red-50">
                <h3 className="text-xl font-semibold text-red-700 mb-4">人材不足・スキル不足</h3>
                <p className="text-gray-700">
                  動画編集スキルを持つ人が社内にいなかったり、担当者が他の業務と兼任で人手が足リなかったりする。このような現状から外注が多く、動画制作を内製化するのはハードルが高いのが現状である。
                </p>
              </Card>

              <Card className="p-6 border-red-200 bg-red-50">
                <h3 className="text-xl font-semibold text-red-700 mb-4">品質維持・改善の難しさ</h3>
                <p className="text-gray-700">
                  クリエイティブの質を高め、効果検証に基づく改善を継続する体制が整っていない企業が多く、動画広告を出しても成果最大化に繋がらない。またクオリティは完全に制作者に依存するため、動画の品質を担保できない。
                </p>
              </Card>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 border-green-200 bg-green-50">
                <h3 className="text-xl font-semibold text-green-700 mb-4">自動化によるコスト削減</h3>
                <p className="text-gray-700">
                  AIで動画制作の工程をすべて代替することで、人手に依存することがなくなり、人件費・制作費削減による低コストでの動画制作が実現可能になる。低コストで動画制作が可能に。
                </p>
              </Card>

              <Card className="p-6 border-green-200 bg-green-50">
                <h3 className="text-xl font-semibold text-green-700 mb-4">高速なコンテンツ作成</h3>
                <p className="text-gray-700">
                  AI技術を活用することで、従来数週間以上かかっていた動画制作を最短数分~数時間で完了できる。これにより、トレンドやマーケティング施策の変更に即座に対応することが可能になり、今までにない広告効果を得られる。
                </p>
              </Card>

              <Card className="p-6 border-green-200 bg-green-50">
                <h3 className="text-xl font-semibold text-green-700 mb-4">専門スキル不要の簡便さ</h3>
                <p className="text-gray-700">
                  AIに従って商品の情報や宣伝ポイントを入力し、広告の形態を選択していくだけで、動画制作の専門的な知識がなくても動画制作が可能。AIが台本から音声まで作成するため、広告制作の素人でもプロ並みの仕上がりにできる。
                </p>
              </Card>

              <Card className="p-6 border-green-200 bg-green-50">
                <h3 className="text-xl font-semibold text-green-700 mb-4">品質とクリエイティビティの両立</h3>
                <p className="text-gray-700">
                  AIが高品質の動画広告を作成してくれるため、品質が安定している上、宣伝の方向性や、動画の雰囲気を変更した複数の広告動画を簡単に作成することが可能であり、ABテスト等の広告改善がスムーズに行える。
                </p>
              </Card>
            </motion.div>
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