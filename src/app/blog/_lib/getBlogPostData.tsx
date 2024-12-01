import { notFound } from 'next/navigation';

import type { Metadata } from 'next/types';

export type PostMetadata = Metadata & {
  title: string;
  description: string;
  cover: string;
};

export type CustomMetadata = {
  publishDate: string;
};

export type BlogPostData = {
  slug: string;
  metadata: PostMetadata;
  customMetadata: CustomMetadata;
};

export async function getBlogPostMetadata(slug: string) {
  try {
    const file = await import('/src/blog/' + slug + '.mdx');

    if (file?.metadata && file?.customMetadata) {
      if (!file.metadata.title || !file.metadata.description) {
        throw new Error(`Missing some required metadata fields in: ${slug}`);
      }

      if (!file.customMetadata.publishDate) {
        throw new Error(
          `Missing required custom metadata field, publishDate, in: ${slug}`
        );
      }

      return {
        slug,
        metadata: file.metadata,
        customMetadata: file.customMetadata,
      };
    } else {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error?.message);
    return notFound();
  }
}
