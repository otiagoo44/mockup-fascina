// ===== Before / After slider =====
document.querySelectorAll('[data-ba-slider]').forEach((slider) => {
  const before = slider.querySelector('.ba-before');
  const range = slider.querySelector('.ba-range');
  const handle = slider.querySelector('.ba-handle');

  function update(value) {
    before.style.width = value + '%';
    handle.style.left = value + '%';
  }

  range.addEventListener('input', (e) => update(e.target.value));
  update(range.value);
});

// ===== FAQ accordion =====
document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.faq-q').forEach((otherBtn) => {
      otherBtn.setAttribute('aria-expanded', 'false');
      otherBtn.nextElementSibling.style.maxHeight = null;
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
