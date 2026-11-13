import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => {
    const d = b.data.published.getTime() - a.data.published.getTime();
    return d !== 0 ? d : a.data.title.localeCompare(b.data.title);
  });
}

export const postUrl = (p: Post) => `/posts/${p.id}/`;

export function readingMinutes(body: string | undefined): number {
  const text = (body ?? '')
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export function wordCount(body: string | undefined): number {
  return (body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

export function related(post: Post, all: Post[], n = 3): Post[] {
  const score = (p: Post) =>
    (p.data.category === post.data.category ? 2 : 0) +
    p.data.destinations.filter((d) => post.data.destinations.includes(d)).length;
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || b.p.data.published.getTime() - a.p.data.published.getTime())
    .slice(0, n)
    .map((x) => x.p);
}

const fmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => fmt.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
