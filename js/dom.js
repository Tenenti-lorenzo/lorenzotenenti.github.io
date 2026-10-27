// Small helpers for safe HTML templating from content.json.

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape a plain string for use in HTML text or attributes. */
export const esc = (value = '') => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);

/** Escape, then turn **bold** into <strong> and *italic* into <em>. */
export const rich = (value = '') =>
  esc(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

/** Join the results of mapping a list into one HTML string. */
export const each = (list = [], fn) => list.map(fn).join('');

export const chips = (items = [], variant = '') =>
  `<ul class="chips">${each(items, (t) => `<li class="chip ${variant}">${esc(t)}</li>`)}</ul>`;

export const ticks = (items = []) => `<ul class="ticks">${each(items, (t) => `<li>${rich(t)}</li>`)}</ul>`;

export const sectionHead = ({ label, title, lead }) => `
  <header class="section-head reveal">
    <p class="eyebrow">${esc(label)}</p>
    <h2 class="section-title">${rich(title)}</h2>
    ${lead ? `<p class="section-lead">${rich(lead)}</p>` : ''}
  </header>`;

/** Render html into the element with the given id, if present. */
export function mount(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
