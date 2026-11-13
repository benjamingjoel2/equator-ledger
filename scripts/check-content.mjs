// Editorial checks for posts: length, banned phrases, internal links, inline photos, sources.
// Run: npm run check:content
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/content/posts';
const files = readdirSync(dir).filter((f) => /\.mdx?$/.test(f));
const slugs = new Set(files.map((f) => f.replace(/\.mdx?$/, '')));
const banned = [/—/, /\bhidden gem/i, /bucket[- ]list/i, /\bnestled\b/i, /\btapestry\b/i, /\bvibrant\b/i, /breathtaking/i, /\bdelve/i, /feast for the senses/i];
let failed = false;

for (const f of files) {
  const raw = readFileSync(join(dir, f), 'utf8');
  const [, fm, body] = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
  const problems = [];
  if (!fm) { console.log(`${f}: missing frontmatter`); failed = true; continue; }
  const text = body.replace(/<Photo[^>]*\/>/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < 1200 || words > 2000) problems.push(`body is ${words} words (want 1,200–2,000)`);
  for (const b of banned) if (b.test(body) || b.test(fm)) problems.push(`banned pattern ${b}`);
  const internal = [...body.matchAll(/\]\(\/posts\/([^/)]+)\/\)/g)].map((m) => m[1]);
  if (internal.length < 2) problems.push(`only ${internal.length} internal post links`);
  for (const s of internal) if (!slugs.has(s)) problems.push(`broken internal link /posts/${s}/`);
  const photos = [...body.matchAll(/<Photo name="([^"]+)"/g)].map((m) => m[1]);
  if (photos.length < 1) problems.push('no inline photo');
  const hero = fm.match(/^hero:\s*(\S+)/m)?.[1];
  if (photos.includes(hero)) problems.push('inline photo repeats hero');
  const srcUrls = [...fm.matchAll(/url:\s*"?([^"\s]+)"?/g)].map((m) => m[1]).filter((u) => !u.includes('tourground.com'));
  const factCheck = /^factCheck:\s*true/m.test(fm);
  if (factCheck && srcUrls.length === 0) problems.push('factCheck post with no sources');
  const bodyExternal = [...body.matchAll(/\]\((https?:[^)\s]+)\)/g)].map((m) => m[1]).filter((u) => !u.includes('tourground.com'));
  for (const u of bodyExternal) if (!srcUrls.includes(u)) problems.push(`inline link not in sources: ${u}`);
  if (/\$\s?\d|US\$\s?\d|USD\s?\d/.test(body)) {
    const money = [...body.matchAll(/(US\$\s?[\d,.]+|\$\s?[\d,.]+|USD\s?[\d,.]+)/g)].map((m) => m[1]);
    console.log(`${f}: money mentions to verify against sources: ${money.join(', ')}`);
  }
  console.log(`${problems.length ? '✗' : '✓'} ${f} (${words} words, ${internal.length} internal links, ${photos.length} photos, ${srcUrls.length} sources)`);
  for (const p of problems) console.log(`    - ${p}`);
  if (problems.length) failed = true;
}
process.exit(failed ? 1 : 0);
