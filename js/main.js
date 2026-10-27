// Entry point: load content, render every section, then wire up behaviour.
import { loadContent } from './content.js';
import { renderLayout } from './sections/layout.js';
import { renderHero, renderAbout } from './sections/hero.js';
import { renderExperience } from './sections/experience.js';
import { renderCaseStudy } from './sections/case-study.js';
import { renderProjects } from './sections/projects.js';
import { renderEducation, renderContact } from './sections/contact.js';
import { initReveal, initHeader, initActiveNav, initMobileMenu, initContactForm } from './effects.js';

const RENDERERS = [
  renderLayout, renderHero, renderAbout, renderExperience,
  renderCaseStudy, renderProjects, renderEducation, renderContact,
];

async function start() {
  try {
    const content = await loadContent();
    RENDERERS.forEach((render) => render(content));
  } catch (err) {
    console.error(err);
    document.getElementById('hero').innerHTML =
      '<div class="container"><p>Content could not be loaded. Please reload the page.</p></div>';
    return;
  }
  initHeader();
  initMobileMenu();
  initActiveNav();
  initReveal();
  initContactForm();

  // Re-apply a #hash target now that sections have content.
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
}

start();
