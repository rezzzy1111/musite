document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const genreCards = document.querySelectorAll('.genre-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Слайдер с переключением слайдов
    const slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Анимация появления элементов на временной шкале
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observer.observe(item));

    // Для карточек жанров с анимацией
    genreCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'scale(1)';
        });
    });
});
