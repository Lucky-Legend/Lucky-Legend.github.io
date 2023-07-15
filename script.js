let rocket = document.getElementById('rocket');
rocket.addEventListener('click', () => {
    rocket.classList.add('blastoff');
});

const observer = new IntersectionObserver(text => {
    text.forEach((obj) => {
        if (obj.isIntersecting) {
            obj.target.classList.add('reveal');
        } else {
            obj.target.classList.remove('reveal');
        }
    })
})

const conceal = document.querySelectorAll('.conceal');
conceal.forEach(elem => observer.observe(elem))