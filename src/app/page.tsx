import Image from 'next/image';
import Link from 'next/link';

import Date from '@/app/blog/_components/Date';
import { getAllBlogPostsData } from '@/app/blog/_lib/getAllBlogPostsData';
import { Card, CardHeading, CardContent } from '@/components/ui';

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    excerpt: string;
    cover?: string;
  };
  customMetadata: {
    publishDate: string;
  };
}

interface BlogCoverProps {
  src: string;
  alt: string;
}

interface BlogPreviewProps {
  post: BlogPost;
}

const BlogCover = ({ src, alt = '' }: BlogCoverProps) => (
  <div className="aspect-h-3 aspect-w-5 overflow-hidden rounded-t-md">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw"
      priority={false}
    />
  </div>
);

const BlogPreview = ({ post }: BlogPreviewProps) => {
  const {
    slug,
    metadata: { title, excerpt, cover },
    customMetadata: { publishDate },
  } = post;

  const blogUrl = `/blog/${slug}`;

  return (
    <div>
      {cover && <BlogCover src={cover} alt={title} />}
      <CardContent className="flex flex-col duration-150" hasCover={!!cover}>
        <div className="w-full">
          <Date dateString={publishDate} />
          <h3 className="group mt-1.5 font-medium">
            <Link
              href={blogUrl}
              className="hover:underline hover:underline-offset-4"
            >
              {title}
            </Link>
          </h3>
          {excerpt && (
            <p className="prose prose-sm mt-4 max-w-lg text-gray-600">
              {excerpt}
            </p>
          )}
          <Link
            href={blogUrl}
            className="mt-4 inline-flex font-medium hover:underline hover:underline-offset-4"
            aria-label={`Read more about ${title}`}
          >
            Read more
          </Link>
        </div>
      </CardContent>
    </div>
  );
};

export default async function Blogs() {
  try {
    const blogs = await getAllBlogPostsData();

    return (
      <Card>
        <CardHeading heading="Recent Articles" />
        <div className="mt-4 space-y-1.5">
          {blogs.length > 0 ? (
            blogs.map((post) => <BlogPreview key={post.slug} post={post} />)
          ) : (
            <CardContent>
              <p className="text-gray-600">No articles found.</p>
            </CardContent>
          )}
        </div>
      </Card>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return (
      <Card>
        <CardHeading heading="Recent Articles" />
        <div className="mt-4 space-y-1.5">
          <CardContent>
            <p className="text-gray-600">Failed to load articles.</p>
          </CardContent>
        </div>
      </Card>
    );
  }
}
