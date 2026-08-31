import type { ActionProp, ItemClickedAction } from '@sitecore-search/react';
import { ArticleCard } from '@sitecore-search/ui';
import Link from 'next/link';
import Image from 'next/image';
import { DEFAULT_IMG_URL } from '@/app/_data/customizations';

type ArticleItemCardProps = {
  className?: string;
  article: {
    id: string;
    name?: string;
    title?: string;
    type?: string;
    image_url?: string;
  };
  index: number;
  onItemClick?: ActionProp<ItemClickedAction>;
};


const ArticleItemCard = ({ className = '', article }: ArticleItemCardProps) => {
  const validImageUrl = article.image_url?.trim() ? article.image_url : DEFAULT_IMG_URL;
  const articleTitle = article.name || article.title || '';

  return (
    <ArticleCard.Root
      key={article.id}
      className={`group relative flex flex-col overflow-hidden rounded-md border border-card-edge bg-white transition-shadow duration-200 ease-linear hover:shadow-[6px_6px_0_0_var(--color-card-accent)] focus-within:shadow-[6px_6px_0_0_var(--color-card-accent)] ${className}`}
    >
      <div className="aspect-h-1 aspect-w-1 h-28 w-full overflow-hidden bg-gray-200 sm:aspect-none">
        <Image
          src={validImageUrl}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          alt={articleTitle}
          width={500}
          height={115}
          loading="lazy"
        />
      </div>
      <div className="m-4 flex-col justify-between relative">
        <Link
          className="focus:outline-indigo-500"
          href={`/detail/${article.id}`}
          aria-label={`View details for ${articleTitle}`}
        >
          <span aria-hidden="true" className="absolute inset-0"></span>
          <ArticleCard.Title className="text-base font-bold text-card-title line-clamp-2">
            {articleTitle}
          </ArticleCard.Title>
        </Link>
        <ArticleCard.Subtitle className="mt-3 text-xs uppercase tracking-wide text-card-body/70">
          {article.type}
        </ArticleCard.Subtitle>
      </div>
    </ArticleCard.Root>
  );
};

export default ArticleItemCard;
