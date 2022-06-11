const changer2 = document.getElementById('theme-changer-burger');
const html2 = document.documentElement;

changer2.addEventListener('change', function () {
  html2.toggleAttribute('data-theme-dark');
});
