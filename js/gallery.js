document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleries = document.querySelectorAll('.gallery');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Hide all galleries
            galleries.forEach(gallery => gallery.classList.add('hidden'));
            // Show selected gallery
            document.querySelector(`.${btn.dataset.brand}-gallery`).classList.remove('hidden');
        });
    });
});