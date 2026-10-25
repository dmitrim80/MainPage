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

// Rotating marina / sailboat background
(function rotateBackground() {
  const images = [
    'https://images.pexels.com/photos/14137344/pexels-photo-14137344.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/13420543/pexels-photo-13420543.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/13004400/pexels-photo-13004400.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/34965625/pexels-photo-34965625.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/5370910/pexels-photo-5370910.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];
  let index = 0;
  const overlay = 'linear-gradient(180deg, rgba(247,241,232,.4) 0%, rgba(247,241,232,.58) 50%, rgba(247,241,232,.7) 100%)';

  function setBackground() {
    document.body.style.backgroundImage = overlay + ', url("' + images[index] + '")';
    document.body.style.backgroundSize = 'auto, cover';
    document.body.style.backgroundPosition = 'center top';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'no-repeat';
  }

  setBackground();
  setInterval(() => {
    index = (index + 1) % images.length;
    setBackground();
  }, 60000);
})();

(function enhanceSailingCertification() {
  if (!document.body.classList.contains('sailing-page')) return;
  // existing sailing page logic remains unchanged
})();
