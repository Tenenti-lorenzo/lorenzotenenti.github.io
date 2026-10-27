// Loads the site copy from content/content.json.

const CONTENT_URL = new URL('../content/content.json', import.meta.url);
const REQUIRED = ['meta', 'nav', 'hero', 'about', 'experience', 'caseStudy', 'projects', 'education', 'contact'];

export async function loadContent() {
  const res = await fetch(CONTENT_URL, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Cannot load content (${res.status})`);
  const data = await res.json();
  const missing = REQUIRED.filter((key) => !(key in data));
  if (missing.length) throw new Error(`content.json is missing: ${missing.join(', ')}`);
  return data;
}
