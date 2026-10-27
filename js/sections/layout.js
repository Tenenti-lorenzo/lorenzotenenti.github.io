// Header brand, navigation and footer.
import { esc, each } from '../dom.js';

export function renderLayout({ meta, nav, footer }) {
  const [first] = meta.name.split(' ');
  document.querySelector('[data-bind="brand"]').innerHTML = `${esc(first)}<span>.</span>`;

  document.getElementById('site-nav').innerHTML = `
    <ul>${each(nav, ({ id, label }) => `<li><a href="#${esc(id)}">${esc(label)}</a></li>`)}</ul>`;

  document.querySelector('[data-bind="footer"]').innerHTML = `
    <span>© ${new Date().getFullYear()} ${esc(meta.name)} · ${esc(footer)}</span>
    <span>
      <a href="${esc(meta.github)}" target="_blank" rel="noopener">GitHub</a> ·
      <a href="${esc(meta.linkedin)}" target="_blank" rel="noopener">LinkedIn</a> ·
      <a href="#top">Back to top ↑</a>
    </span>`;
}
