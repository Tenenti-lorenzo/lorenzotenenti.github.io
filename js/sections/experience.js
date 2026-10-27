// Experience timeline.
import { esc, each, ticks, sectionHead, mount } from '../dom.js';

const job = (item, index) => `
  <article class="job reveal ${index === 0 ? 'job--current' : ''}">
    <div>
      <p class="job-period">${esc(item.period)}</p>
      <p class="job-org">${esc(item.org)}</p>
      <p class="job-loc">${esc(item.location)}</p>
    </div>
    <div>
      <h3 class="job-role">${esc(item.role)}</h3>
      ${ticks(item.bullets)}
      ${item.link ? `<a class="link-arrow" href="${esc(item.link.href)}">${esc(item.link.label)} →</a>` : ''}
    </div>
  </article>`;

export function renderExperience({ experience }) {
  mount('experience', `
    <div class="container">
      ${sectionHead(experience)}
      <div class="timeline">${each(experience.items, job)}</div>
    </div>`);
}
