/*let button = document.getElementById('button');
let menu = document.getElementById('menu');
button.addEventListener('click', function () {
    menu.classList.toggle('menu-show');
}) */
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  const isOpen = btn.classList.toggle('is-open');

  btn.setAttribute('aria-expanded', isOpen);
  btn.setAttribute('aria-label', isOpen ? 'Закрити меню' : 'Відкрити меню');

  menu.classList.toggle('open', isOpen);
});

