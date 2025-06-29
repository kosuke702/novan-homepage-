import { newsItems } from '@/lib/news-data'; // ★ インポート先を新しいファイルに変更します
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = newsItems.find((item) => item.slug === params.slug);
  return {
    title: item?.title || 'ニュース',
  };
}

export default function NewsDetailPage({ params }: Props) {
  const item = newsItems.find((item) => item.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 border-b pb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <time dateTime={item.date}>{item.date}</time>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm w-fit">
                {item.category}
              </span>
            </div>
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">{item.content}</p>
          </div>

        </article>
      </div>
    </div>
  );
}