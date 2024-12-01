import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Date } from '@/app/blog/_components';
import 'highlight.js/styles/stackoverflow-dark.css';
import markdownStyles from '@/app/blog/_components/markdown/markdown.module.css';
import { getBlogPostMetadata, getAllBlogPostsData } from '@/app/blog/_lib';
import { Card, CardContent, InfoItem } from '@/components/ui';
import { UserIcon, CalendarIcon, FolderIcon } from '@/components/ui/icons';

type BlogPageProps = { params: { slug: string } };

const BlogCover = ({ src, alt = '' }: { src: string; alt: string }) => (
  <div className="aspect-h-3 aspect-w-5 overflow-hidden rounded-t-md">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-center"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw"
    />
  </div>
);

export default async function BlogPage({ params }: BlogPageProps) {
  const slug = (await params).slug;
  const { metadata, customMetadata } = await getBlogPostMetadata(slug);
  const title = `${metadata.title ?? ''}`;
  const cover = `${metadata.cover ?? ''}`;
  const author = `${metadata.author ?? ''}`;
  const BlogMarkdown = dynamic(() => import('/src/blog/' + slug + '.mdx'));

  return (
    <Card>
      {cover && <BlogCover src={cover} alt={title} />}
      <CardContent className="flex flex-col duration-150" hasCover={!!cover}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
          <InfoItem icon={FolderIcon} text={title} />
          <InfoItem icon={UserIcon} text={author} />
          <InfoItem
            icon={CalendarIcon}
            text={<Date dateString={customMetadata.publishDate} />}
          />
        </div>
        <div
          className={`${markdownStyles['markdown']} prose prose-sm mt-4 max-w-none border-t border-dashed border-gray-200 pt-4`}
        >
          <BlogMarkdown />
        </div>
      </CardContent>
    </Card>
  );
}

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPostsData();
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post.slug,
  }));
  return blogStaticParams;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const slug = (await params).slug;
  const { metadata } = await getBlogPostMetadata(slug);
  if (metadata) {
    return metadata;
  } else {
    throw new Error(`No metadata found for blog post: ${slug}`);
  }
}
