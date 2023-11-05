const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');
const reviewDescription = document.querySelector('.review-description');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating.setAttribute('data-rating', index + 1);
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('fa-solid');
                s.classList.remove('fa-regular');
            } else {
                s.classList.add('fa-regular');
                s.classList.remove('fa-solid');
            }
        });
    });
});