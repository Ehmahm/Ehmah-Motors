document.addEventListener('DOMContentLoaded', () => {
    const brandBtns = document.querySelectorAll('.brand-filter .filter-btn');
    const modelBtns = document.querySelectorAll('.model-filter .model-btn');
    const reviews = document.querySelectorAll('.reviews');

    brandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            brandBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            reviews.forEach(review => review.classList.add('hidden'));
            document.querySelector(`.${btn.dataset.brand}-reviews`).classList.remove('hidden');
        });
    });

    modelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const activeReviews = document.querySelector('.reviews:not(.hidden)');
            const modelReviews = document.querySelector(`.${btn.dataset.model}-reviews`);
            
            if (modelReviews) {
                activeReviews.classList.add('hidden');
                modelReviews.classList.remove('hidden');
            }
        });
    });
});