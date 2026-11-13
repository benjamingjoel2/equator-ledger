import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, CATEGORIES } from '../data/site';
import { getPosts, postUrl } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    trailingSlash: true,
    customData: `<language>en-gb</language><copyright>Published by Tourground</copyright>`,
    items: posts.map((p) => ({
      title: p.data.sponsored ? `Advertisement feature: ${p.data.title}` : p.data.title,
      description: p.data.description,
      link: postUrl(p),
      pubDate: p.data.published,
      categories: [CATEGORIES[p.data.category].name],
      author: `${SITE.email} (Equator Ledger editors)`,
    })),
  });
}
