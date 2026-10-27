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

// Smooth rotating marina / sailboat background — uses existing repo photos
(function rotateBackground() {
  const images = [
    'static/media/IMG_8710.jpeg',
    'static/media/IMG_8651.jpeg',
    '1981-tayana-37-pilothouse-sail-9729161-20250326143744029-1_XLARGE.webp',
    '1981-tayana-37-pilothouse-sail-9729161-20250326143750786-1_XLARGE.webp',
    '1981-tayana-37-pilothouse-sail-9729161-20250326143805236-1_XLARGE.webp'
  ];
  let index = 0;

  const layerA = document.createElement('div');
  const layerB = document.createElement('div');
  [layerA, layerB].forEach(el => {
    el.style.cssText = 'position:fixed;inset:0;background-size:cover;background-position:center top;background-attachment:fixed;background-repeat:no-repeat;z-index:-2;transition:opacity 1.8s ease-in-out;pointer-events:none;';
  });
  layerB.style.opacity = '0';
  document.body.prepend(layerA);
  document.body.prepend(layerB);

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg, rgba(247,241,232,.4) 0%, rgba(247,241,232,.58) 50%, rgba(247,241,232,.7) 100%);';
  document.body.prepend(overlay);

  let active = layerA;
  let inactive = layerB;

  function show(url) {
    inactive.style.backgroundImage = 'url("' + url + '")';
    inactive.style.opacity = '1';
    active.style.opacity = '0';
    [active, inactive] = [inactive, active];
  }

  show(images[0]);

  setInterval(() => {
    index = (index + 1) % images.length;
    show(images[index]);
  }, 15000);
})();

(function enhanceSailingCertification() {
  if (!document.body.classList.contains('sailing-page')) return;
  // existing sailing page logic remains unchanged
})();
