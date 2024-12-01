import { Feed } from 'feed';

import { getAllBlogPostsData } from '@/app/blog/_lib';

const SITE_URL = 'https://example.com';

const feed = new Feed({
  title: 'My Blog RSS Feed',
  description: 'This is my personal feed!',
  id: SITE_URL,
  link: SITE_URL,
  language: 'en',
  copyright: `All rights reserved ${new Date().getFullYear()}, My Name`,
  feedLinks: {
    rss2: `${SITE_URL}/feed.xml`,
  },
  author: {
    name: 'My Name',
    email: 'email@example.com',
  },
});

export async function GET() {
  try {
    const posts = await getAllBlogPostsData();

    posts.forEach((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      feed.addItem({
        title: post.metadata.title ?? 'Untitled',
        id: url,
        link: url,
        description: post.metadata.excerpt ?? '', // Use excerpt
        content: post.metadata.excerpt ?? '', // Use excerpt
        author: [
          {
            name: post.metadata.author ?? 'Anonymous',
          },
        ],
        date: new Date(post.customMetadata.publishDate),
      });
    });

    return new Response(feed.rss2(), {
      headers: {
        'Content-Type': 'application/rss+xml',
        'Cache-Control': 'max-age=3600, public',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating feed', { status: 500 });
  }
}
