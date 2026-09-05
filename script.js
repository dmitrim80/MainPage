const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
}

navLinks.forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  if (menuButton) {
    menuButton.setAttribute('aria-expanded', 'false');
  }
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min((index % 4) * 60, 180)}ms`;
  observer.observe(element);
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

(function enhanceSailingCertification() {
  if (!document.body.classList.contains('sailing-page')) return;

  if (!document.getElementById('asa101-styles')) {
    const style = document.createElement('style');
    style.id = 'asa101-styles';
    style.textContent = '.cert-badge{display:inline-flex;align-items:center;gap:8px;margin:0 0 18px;padding:7px 12px 7px 10px;border:1px solid rgba(94,207,196,.35);background:rgba(8,28,38,.72);color:#9fe6dd;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-weight:500}.cert-badge .mark{width:16px;height:16px;border-radius:50%;display:grid;place-items:center;background:#5ecfc4;color:#041018;font-size:11px;line-height:1;font-weight:700}.course-list li.certified::before{background:#5ecfc4;border-color:#5ecfc4;box-shadow:0 0 10px rgba(94,207,196,.45)}.course-list li.certified strong{color:#f0f5f4}.course-list .status{display:inline-block;margin-left:8px;padding:1px 6px;border:1px solid rgba(94,207,196,.35);color:#7ee0d6;font-size:9px;letter-spacing:.12em;text-transform:uppercase;vertical-align:middle}.log-card--photo{grid-column:1/-1;display:grid;grid-template-columns:1.15fr .85fr;overflow:hidden;border:1px solid rgba(94,207,196,.16);background:rgba(13,26,36,.9);min-height:280px}.log-card--photo img{width:100%;height:100%;min-height:280px;object-fit:cover;object-position:center 40%;filter:saturate(.95) brightness(.92)}.log-card--photo .log-card__body{padding:28px 30px;display:flex;flex-direction:column;justify-content:center}.log-card--photo span{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#5ecfc4;margin-bottom:10px}.log-card--photo strong{display:block;font-size:clamp(22px,2.4vw,30px);font-weight:400;letter-spacing:-.02em;color:#f0f5f4;margin-bottom:10px}.log-card--photo p{color:#91a7ac;font-size:13.5px;line-height:1.6;margin:0 0 14px}.log-card--photo small{color:#6d8288;letter-spacing:.1em;text-transform:uppercase;font-size:10px}@media(max-width:800px){.log-card--photo{grid-template-columns:1fr}.log-card--photo img{min-height:220px}}';
    document.head.appendChild(style);
  }

  const heroRule = document.querySelector('.sailing-hero .hero-rule');
  const lede = document.querySelector('.sailing-lede');
  if (heroRule && !document.querySelector('.cert-badge')) {
    const badge = document.createElement('p');
    badge.className = 'cert-badge';
    badge.innerHTML = '<span class="mark" aria-hidden="true">✓</span> ASA 101 Certified · Basic Keelboat';
    heroRule.insertAdjacentElement('afterend', badge);
  }
  if (lede) {
    lede.textContent = 'Practical knowledge, refined gear, and timeless seamanship for bluewater sailors. The first formal certification is complete.';
  }

  const courseTitle = document.querySelector('.course-panel h2');
  const courseList = document.querySelector('.course-list');
  if (courseTitle) courseTitle.textContent = 'ASA pathway';
  if (courseList) {
    courseList.innerHTML = [
      '<li class="certified"><span class="num">01</span><strong>ASA 101 <span class="status">Certified</span></strong><p>Basic Keelboat — points of sail, sail trim, tacking, gybing, and safe crew work.</p></li>',
      '<li class="active"><span class="num">02</span><strong>ASA 103</strong><p>Basic Coastal Cruising — next: skippering a keelboat in coastal conditions.</p></li>',
      '<li><span class="num">03</span><strong>ASA 104</strong><p>Bareboat Cruising — independent command of a cruising yacht.</p></li>',
      '<li><span class="num">04</span><strong>ASA 105 / 106</strong><p>Coastal navigation and advanced coastal cruising.</p></li>'
    ].join('');
  }

  document.querySelectorAll('.prep-card h3').forEach((heading) => {
    if (heading.textContent.trim() !== 'Build competence') return;
    const list = heading.parentElement.querySelector('ul');
    if (!list || /ASA 101/.test(list.textContent)) return;
    const item = document.createElement('li');
    item.textContent = 'ASA 101 Basic Keelboat — certified';
    list.insertBefore(item, list.firstChild);
  });

  document.querySelectorAll('.route-stop h3').forEach((heading) => {
    if (heading.textContent.trim() !== 'Research & definition') return;
    const copy = heading.parentElement.querySelector('p');
    if (copy) copy.textContent = 'Clarify the mission, boat criteria, and budget. ASA 101 Basic Keelboat is certified.';
  });

  const logIntroEyebrow = document.querySelector('#log .log-intro .eyebrow');
  if (logIntroEyebrow) logIntroEyebrow.textContent = 'Field notes';
  const logIntroP = document.querySelector('#log .log-intro > p');
  if (logIntroP) {
    logIntroP.textContent = 'Entries will cover training, the boat search, equipment choices, passages and lessons that turn preparation into real experience.';
  }

  const logGrid = document.querySelector('#log .log-grid');
  if (logGrid && !logGrid.querySelector('.log-card--photo')) {
    logGrid.innerHTML = [
      '<article class="log-card log-card--photo">',
      '<img src="assets/harbor-inspiration.png" alt="On the water during ASA 101 Basic Keelboat training">',
      '<div class="log-card__body">',
      '<span>Log 001 · Training</span>',
      '<strong>ASA 101 certified</strong>',
      '<p>Basic Keelboat is complete. Time on the water covering sail theory, points of sail, trim, tacking, gybing, and safe crew work.</p>',
      '<small>American Sailing Association · Basic Keelboat</small>',
      '</div></article>',
      '<article class="log-card"><span>Log 002</span><strong>The offshore boat shortlist</strong><small>Coming soon</small></article>',
      '<article class="log-card"><span>Log 003</span><strong>Building the passage plan</strong><small>Coming soon</small></article>'
    ].join('');
  }

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', "Dmitri Morozov's sailing and exploration journey — ASA 101 Basic Keelboat certified, with the vision, preparation and path toward extended offshore passages.");
  }
})();
