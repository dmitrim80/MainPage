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
    style.textContent = [
      '.cert-badge{display:inline-flex;align-items:center;gap:8px;margin:0 0 18px;padding:7px 12px 7px 10px;border:1px solid rgba(94,207,196,.35);background:rgba(8,28,38,.72);color:#9fe6dd;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-weight:500}',
      '.cert-badge .mark{width:16px;height:16px;border-radius:50%;display:grid;place-items:center;background:#5ecfc4;color:#041018;font-size:11px;line-height:1;font-weight:700}',
      '.course-list li.certified::before{background:#5ecfc4;border-color:#5ecfc4;box-shadow:0 0 10px rgba(94,207,196,.45)}',
      '.course-list li.certified strong{color:#f0f5f4}',
      '.course-list .status{display:inline-block;margin-left:8px;padding:1px 6px;border:1px solid rgba(94,207,196,.35);color:#7ee0d6;font-size:9px;letter-spacing:.12em;text-transform:uppercase;vertical-align:middle}',
      '.asa-cert{padding:28px max(5vw,calc((100vw - 1180px)/2));background:rgba(6,14,22,.55)}',
      '.asa-cert__card{display:grid;grid-template-columns:.9fr 1.1fr;border:1px solid rgba(94,207,196,.18);background:#0c1216;overflow:hidden;min-height:420px}',
      '.asa-cert__copy{padding:48px 42px;display:flex;flex-direction:column;justify-content:center}',
      '.asa-cert__brand{display:flex;align-items:center;gap:10px;margin:0 0 28px;color:#8eb4d4;font-size:11px;letter-spacing:.16em;text-transform:uppercase}',
      '.asa-cert__mark{width:18px;height:18px;background:#e23b2c;clip-path:polygon(15% 100%,15% 18%,85% 0,85% 100%,70% 100%,70% 28%,30% 42%,30% 100%)}',
      '.asa-cert__copy h2{margin:0 0 16px;font-size:clamp(28px,3.4vw,44px);line-height:1.12;letter-spacing:-.03em;font-weight:400;color:#d7e3f0}',
      '.asa-cert__copy p{margin:0;color:#8aa0b0;font-size:15px;line-height:1.6;max-width:420px}',
      '.asa-cert__copy .quiet{margin-top:22px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6d8288}',
      '.asa-cert__media{min-height:360px;background:#11161b}',
      '.asa-cert__media img{width:100%;height:100%;object-fit:cover;object-position:center 30%;filter:saturate(.9) brightness(.92)}',
      '.asa-cert__official{display:block;width:min(560px,100%);height:auto;margin:0 auto}',
      '.log-card--photo{grid-column:1/-1;display:grid;grid-template-columns:1.15fr .85fr;overflow:hidden;border:1px solid rgba(94,207,196,.16);background:rgba(13,26,36,.9);min-height:280px}',
      '.log-card--photo img{width:100%;height:100%;min-height:280px;object-fit:cover;object-position:center 40%;filter:saturate(.95) brightness(.92)}',
      '.log-card--photo .log-card__body{padding:28px 30px;display:flex;flex-direction:column;justify-content:center}',
      '.log-card--photo span{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#5ecfc4;margin-bottom:10px}',
      '.log-card--photo strong{display:block;font-size:clamp(22px,2.4vw,30px);font-weight:400;letter-spacing:-.02em;color:#f0f5f4;margin-bottom:10px}',
      '.log-card--photo p{color:#91a7ac;font-size:13.5px;line-height:1.6;margin:0 0 14px}',
      '.log-card--photo small{color:#6d8288;letter-spacing:.1em;text-transform:uppercase;font-size:10px}',
      '@media(max-width:800px){.asa-cert{padding:22px}.asa-cert__card,.log-card--photo{grid-template-columns:1fr}.asa-cert__copy{padding:32px 24px}.asa-cert__media,.log-card--photo img{min-height:240px}}'
    ].join('');
    document.head.appendChild(style);
  }

  const heroRule = document.querySelector('.sailing-hero .hero-rule');
  const lede = document.querySelector('.sailing-lede');
  if (heroRule && !document.querySelector('.cert-badge')) {
    const badge = document.createElement('p');
    badge.className = 'cert-badge';
    badge.innerHTML = '<span class="mark" aria-hidden="true">\u2713</span> ASA 101 Certified \u00b7 Basic Keelboat';
    heroRule.insertAdjacentElement('afterend', badge);
  }
  if (lede) {
    lede.textContent = 'Practical knowledge, refined gear, and timeless seamanship for bluewater sailors. The first formal certification is complete.';
  }

  const hero = document.querySelector('.sailing-hero');
  if (hero && !document.querySelector('.asa-cert')) {
    const section = document.createElement('section');
    section.className = 'asa-cert';
    section.setAttribute('aria-label', 'ASA 101 certification');
    section.innerHTML = [
      '<div class="asa-cert__card">',
      '<div class="asa-cert__copy">',
      '<p class="asa-cert__brand"><span class="asa-cert__mark" aria-hidden="true"></span> American Sailing</p>',
      '<h2>Dmitri, you\u2019ve earned your ASA 101 Certification. That\u2019s a big deal.</h2>',
      '<p>Basic Keelboat is complete: sail theory, points of sail, trim, tacking, gybing, and safe crew work.</p>',
      '<p class="quiet">American Sailing Association \u00b7 Education since 1983</p>',
      '</div>',
      '<div class="asa-cert__media">',
      '<img id="asa101-cert-photo" src="assets/harbor-inspiration.png" alt="ASA 101 Basic Keelboat certification">',
      '</div></div>'
    ].join('');
    hero.insertAdjacentElement('afterend', section);

    fetch('assets/asa-101-cert.b64').then(function (r) { return r.ok ? r.text() : Promise.reject(); }).then(function (t) {
      if (!t) return;
      const card = section.querySelector('.asa-cert__card');
      if (!card) return;
      card.innerHTML = '<img class="asa-cert__official" src="data:image/jpeg;base64,' + t.trim() + '" alt="American Sailing Association notice: Dmitri has earned ASA 101 Certification">';
      card.style.display = 'block';
      card.style.background = '#111';
    }).catch(function () {});
  }

  const courseTitle = document.querySelector('.course-panel h2');
  const courseList = document.querySelector('.course-list');
  if (courseTitle) courseTitle.textContent = 'ASA pathway';
  if (courseList) {
    courseList.innerHTML = [
      '<li class="certified"><span class="num">01</span><strong>ASA 101 <span class="status">Certified</span></strong><p>Basic Keelboat \u2014 points of sail, sail trim, tacking, gybing, and safe crew work.</p></li>',
      '<li class="active"><span class="num">02</span><strong>ASA 103</strong><p>Basic Coastal Cruising \u2014 next: skippering a keelboat in coastal conditions.</p></li>',
      '<li><span class="num">03</span><strong>ASA 104</strong><p>Bareboat Cruising \u2014 independent command of a cruising yacht.</p></li>',
      '<li><span class="num">04</span><strong>ASA 105 / 106</strong><p>Coastal navigation and advanced coastal cruising.</p></li>'
    ].join('');
  }

  document.querySelectorAll('.prep-card h3').forEach((heading) => {
    if (heading.textContent.trim() !== 'Build competence') return;
    const list = heading.parentElement.querySelector('ul');
    if (!list || /ASA 101/.test(list.textContent)) return;
    const item = document.createElement('li');
    item.textContent = 'ASA 101 Basic Keelboat \u2014 certified';
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
      '<span>Log 001 \u00b7 Training</span>',
      '<strong>ASA 101 certified</strong>',
      '<p>Basic Keelboat is complete. Time on the water covering sail theory, points of sail, trim, tacking, gybing, and safe crew work.</p>',
      '<small>American Sailing Association \u00b7 Basic Keelboat</small>',
      '</div></article>',
      '<article class="log-card"><span>Log 002</span><strong>The offshore boat shortlist</strong><small>Coming soon</small></article>',
      '<article class="log-card"><span>Log 003</span><strong>Building the passage plan</strong><small>Coming soon</small></article>'
    ].join('');
  }

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', "Dmitri Morozov's sailing and exploration journey \u2014 ASA 101 Basic Keelboat certified, with the vision, preparation and path toward extended offshore passages.");
  }
})();
