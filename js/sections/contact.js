// Education and Contact sections.
import { esc, rich, each, sectionHead, mount } from '../dom.js';

export function renderEducation({ education: ed }) {
  mount('education', `
    <div class="container">
      ${sectionHead(ed)}
      <div class="edu-grid">
        ${each(ed.degrees, (d) => `
          <article class="card reveal">
            <span class="edu-badge">${esc(d.badge)}</span>
            <h3>${esc(d.degree)}</h3>
            <p class="edu-school">${esc(d.school)}</p>
            <p class="edu-meta">${esc(d.period)} · ${esc(d.grade)}</p>
            ${d.detail ? `<p class="edu-detail">${rich(d.detail)}</p>` : ''}
          </article>`)}
      </div>
      <ul class="certs reveal">${each(ed.certifications, (c) => `<li class="cert">${esc(c)}</li>`)}</ul>
    </div>`);
}

export function renderContact({ contact, meta }) {
  const links = [
    { kind: 'Email', label: meta.email, href: `mailto:${meta.email}` },
    { kind: 'LinkedIn', label: 'lorenzo-tenenti', href: meta.linkedin, external: true },
    { kind: 'GitHub', label: 'Tenenti-lorenzo', href: meta.github, external: true },
    { kind: 'Phone', label: meta.phone, href: `tel:${meta.phone.replace(/\s/g, '')}` },
  ];

  mount('contact', `
    <div class="container contact-grid">
      <div>
        ${sectionHead({ label: contact.label, title: contact.title, lead: contact.intro })}
        <nav class="contact-links reveal" aria-label="Contact links">
          ${each(links, (l) => `
            <a href="${esc(l.href)}" ${l.external ? 'target="_blank" rel="noopener"' : ''}>
              <span>${esc(l.label)}</span><small>${esc(l.kind)}</small>
            </a>`)}
        </nav>
      </div>
      <form class="card contact-form reveal" data-email="${esc(meta.email)}">
        <div><label for="cf-name">Name</label><input id="cf-name" name="name" required autocomplete="name"></div>
        <div><label for="cf-email">Email</label><input id="cf-email" name="email" type="email" required autocomplete="email"></div>
        <div><label for="cf-msg">Message</label><textarea id="cf-msg" name="message" rows="5" required></textarea></div>
        <button class="btn btn--primary" type="submit">Send message <span class="arrow">→</span></button>
        <p class="form-note">${esc(contact.formNote)}</p>
      </form>
    </div>`);
}
