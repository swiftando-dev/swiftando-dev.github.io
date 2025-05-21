// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

function copyEmail() {
    const emailInput = document.getElementById('email');
    navigator.clipboard.writeText(emailInput.value).then(() => {
        const msg = document.getElementById('copy-msg');
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 3000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (!document.getElementById('mobile-menu').classList.contains('hidden')) {
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

let scrollPosition = 0;
let numCards = 5;
let timesToScroll = 0;
function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const cardWidth = carousel.firstElementChild.offsetWidth + 24; // 24px = space-x-6

    if (direction < 0 && timesToScroll > 0) {
        timesToScroll--;
    } else if (direction > 0 && timesToScroll < numCards - 1) {
        timesToScroll++;
    } else {
        return;
    }

    scrollPosition += direction * cardWidth;
    carousel.style.transform = `translateX(${-scrollPosition}px)`;
}
