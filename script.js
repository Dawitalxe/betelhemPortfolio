const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === filter));
  const category = filter.dataset.filter;
  cards.forEach(card => {
    const matches = category === 'all' || card.dataset.category.split(' ').includes(category);
    card.classList.toggle('hidden', !matches);
  });
}));

const dialog = document.getElementById('project-dialog');
const title = document.getElementById('dialog-title');
const description = document.getElementById('dialog-description');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  title.textContent = button.dataset.project;
  description.textContent = button.dataset.description;
  if (typeof dialog.showModal === 'function') dialog.showModal();
}));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
document.getElementById('year').textContent = new Date().getFullYear();
