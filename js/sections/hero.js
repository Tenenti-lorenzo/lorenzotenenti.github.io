// Hero and About sections.
import { esc, rich, each, chips, sectionHead, mount } from '../dom.js';

export function renderHero({ hero }) {
  const [first, last] = hero.nameLines;
  mount('hero', `
    <div class="container">
      <p class="eyebrow reveal">${esc(hero.eyebrow)}</p>
      <h1 class="hero-name reveal"><span>${esc(first)}</span><span>${esc(last)}<i>.</i></span></h1>
      <p class="hero-tagline reveal">${rich(hero.tagline)}</p>
      <div class="hero-actions reveal">
        ${each(hero.ctas, ({ label, href, style }) =>
          `<a class="btn btn--${esc(style)}" href="${esc(href)}">${esc(label)} <span class="arrow">→</span></a>`)}
      </div>
      <dl class="hero-highlights reveal">
        ${each(hero.highlights, ({ value, label }) =>
          `<div><dt class="metric-value">${esc(value)}</dt><dd>${esc(label)}</dd></div>`)}
      </dl>
    </div>`);
}

export function renderAbout({ about }) {
  mount('about', `
    <div class="container">
      ${sectionHead(about)}
      <div class="about-grid">
        <div class="about-text reveal">${each(about.paragraphs, (p) => `<p>${rich(p)}</p>`)}</div>
        <div class="card skills reveal">
          ${each(about.skills, ({ group, items }) => `<div><h3>${esc(group)}</h3>${chips(items)}</div>`)}
        </div>
      </div>
    </div>`);
}
