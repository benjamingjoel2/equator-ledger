import { SITE, CATEGORIES, DESTINATIONS } from '../data/site';
import { getPosts, postUrl, isoDate } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const latest = posts.reduce((m, p) => (p.data.updated > m ? p.data.updated : m), new Date(SITE.launched));
  const urls: { loc: string; lastmod: string }[] = [
    { loc: '/', lastmod: isoDate(latest) },
    { loc: '/posts/', lastmod: isoDate(latest) },
    { loc: '/destinations/', lastmod: isoDate(latest) },
    ...Object.keys(DESTINATIONS).map((k) => ({ loc: `/destinations/${k}/`, lastmod: isoDate(latest) })),
    ...Object.keys(CATEGORIES).filter((k) => k !== 'destinations').map((k) => ({ loc: `/category/${k}/`, lastmod: isoDate(latest) })),
    ...posts.map((p) => ({ loc: postUrl(p), lastmod: isoDate(p.data.updated) })),
    ...['/about/', '/authors/', '/disclosure/', '/privacy/', '/cookies/', '/terms/', '/photo-credits/'].map((loc) => ({ loc, lastmod: SITE.launched })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${new URL(u.loc, SITE.url).href}</loc><lastmod>${u.lastmod}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
