import { readdir } from 'fs/promises';

import { getBlogPostMetadata } from '@/app/blog/_lib/getBlogPostData';

import type { Dirent } from 'fs';

interface BlogPost {
  metadata: {
    title: string;
    excerpt: string;
    cover?: string;
    author?: string;
  };
  customMetadata: {
    publishDate: string;
  };
  slug: string;
}

const isMDXFile = (dirent: Dirent): boolean =>
  !dirent.isDirectory() && dirent.name.endsWith('.mdx');

const getSlugFromFilename = (dirent: Dirent): string =>
  dirent.name.substring(0, dirent.name.lastIndexOf('.'));

export async function getAllBlogPostsData(): Promise<BlogPost[]> {
  try {
    const dirents = await readdir('./src/blog/', {
      withFileTypes: true,
    });

    const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename);

    const posts = await Promise.all(
      slugs.map(async (slug) => {
        const post = await getBlogPostMetadata(slug);
        return { ...post, slug };
      })
    );

    return posts.sort((a, b) => {
      const dateA = new Date(a.customMetadata.publishDate);
      const dateB = new Date(b.customMetadata.publishDate);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
