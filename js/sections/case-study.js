// AXA document-intelligence platform case study.
import { esc, rich, each, chips, ticks, sectionHead, mount } from '../dom.js';

const metrics = (items) => `
  <div class="metrics reveal">
    ${each(items, ({ value, label }) => `<div><p class="metric-value">${esc(value)}</p><p class="metric-label">${esc(label)}</p></div>`)}
  </div>`;

const pipeline = (title, steps) => `
  <h3 class="subhead reveal">${esc(title)}</h3>
  <ol class="pipeline">
    ${each(steps, ({ title: name, desc }) => `<li class="reveal"><h4>${esc(name)}</h4><p>${rich(desc)}</p></li>`)}
  </ol>`;

const services = (title, items) => `
  <h3 class="subhead reveal">${esc(title)}</h3>
  <div class="services">
    ${each(items, ({ name, desc, details }) => `
      <article class="card reveal">
        <h3>${esc(name)}</h3>
        <p>${rich(desc)}</p>
        ${ticks(details)}
      </article>`)}
  </div>`;

const operations = (cs) => `
  <div class="ops-grid">
    <div class="rag-card reveal">
      <h3>${esc(cs.ragTitle)}</h3>
      ${ticks(cs.rag)}
    </div>
    <div class="platform">
      <h3 class="platform-title reveal">${esc(cs.platformTitle)}</h3>
      ${each(cs.platform, ({ area, tools, desc }) => `
        <div class="platform-item reveal">
          <h4>${esc(area)}</h4>
          ${chips(tools, 'chip--accent')}
          <p>${rich(desc)}</p>
        </div>`)}
    </div>
  </div>`;

export function renderCaseStudy({ caseStudy: cs }) {
  mount('axa', `
    <div class="container">
      ${sectionHead({ label: cs.label, title: cs.title, lead: cs.intro })}
      ${metrics(cs.metrics)}
      ${pipeline(cs.pipelineTitle, cs.pipeline)}
      ${services(cs.servicesTitle, cs.services)}
      ${operations(cs)}
    </div>`);
}
