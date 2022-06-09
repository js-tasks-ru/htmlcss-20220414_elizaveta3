const changer = document.getElementById('theme-changer-burger');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});
