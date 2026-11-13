import { SITE, CATEGORIES, DESTINATIONS } from '../data/site';
import { getPosts, postUrl, isoDate } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const abs = (p: string) => new URL(p, SITE.url).href;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Equator Ledger is published by Tourground (https://tourground.com). Every post shows when it was published and last updated, and lists its sources. Health, entry, park-fee and safety facts link to the official source. Paid content, if any, is labelled "Advertisement feature". When citing, please name Equator Ledger and link to the page.',
    '',
    '## Stories',
    '',
    ...posts.map((p) => `- [${p.data.title}](${abs(postUrl(p))}): ${p.data.description} (${CATEGORIES[p.data.category].name}; updated ${isoDate(p.data.updated)})`),
    '',
    '## Destinations',
    '',
    ...Object.entries(DESTINATIONS).map(([k, d]) => `- [${d.name}](${abs(`/destinations/${k}/`)}): ${d.blurb}`),
    '',
    '## Categories',
    '',
    ...Object.entries(CATEGORIES).filter(([k]) => k !== 'destinations').map(([k, c]) => `- [${c.name}](${abs(`/category/${k}/`)}): ${c.blurb}`),
    '',
    '## About',
    '',
    `- [About](${abs('/about/')}): Who publishes Equator Ledger and how it is written.`,
    `- [Authors](${abs('/authors/')}): Who writes the stories.`,
    `- [Disclosure](${abs('/disclosure/')}): How Tourground is connected to the operators linked from posts.`,
    `- [Photo credits](${abs('/photo-credits/')}): Photographers and licences.`,
    `- [RSS feed](${abs('/rss.xml')})`,
    `- [Sitemap](${abs('/sitemap.xml')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
