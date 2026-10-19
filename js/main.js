document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-ready');

  const navToggle = document.querySelector('.nav-toggle');
  const primaryLinks = document.querySelector('.primary-links');

  if (navToggle && primaryLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const enterLink = document.querySelector('.enter-link');

  if (enterLink && !reducedMotion) {
    enterLink.addEventListener('click', (event) => {
      const destination = enterLink.href;
      event.preventDefault();
      document.body.classList.add('is-leaving');
      window.setTimeout(() => {
        window.location.href = destination;
      }, 220);
    });
  }
});
