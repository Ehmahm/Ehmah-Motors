document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    const set = (open) => {
        links.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', open);
    };
    toggle.addEventListener('click', () => set(!links.classList.contains('active')));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
});
