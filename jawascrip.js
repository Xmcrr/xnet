window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

window.addEventListener('DOMContentLoaded', function() {
    var hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(function() {
            hero.classList.add('fade-in');
        }, 300);
    }

    // Fungsi cek apakah elemen di tengah viewport
    function isInCenter(el) {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        return Math.abs(elCenter - viewportCenter) < rect.height / 2;
    }

    // Daftar section dan isian yang mau dianimasikan
    const sections = [
        document.querySelector('.section-card'),
        document.querySelector('.section-plan'),
        document.querySelector('.section-review')
    ];
    const isians = [
        document.querySelector('.isian-card'),
        document.querySelector('.isian-card-plan'),
        document.querySelector('.isian-card-review')
    ];

    function animateOnCenter() {
        sections.forEach(sec => {
            if (sec && isInCenter(sec)) {
                sec.classList.add('active');
            } else if (sec) {
                sec.classList.remove('active');
            }
        });
        isians.forEach(isian => {
            if (isian && isInCenter(isian)) {
                isian.classList.add('active');
            } else if (isian) {
                isian.classList.remove('active');
            }
        });
    }

    // Jalankan saat scroll dan saat load
    window.addEventListener('scroll', animateOnCenter);
    animateOnCenter();

    // Footer Contact Us popup
    var form = document.getElementById('contact-footer-form');
    var popup = document.getElementById('footer-popup');
    if(form && popup) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            popup.style.display = 'block';
            setTimeout(function() {
                popup.style.display = 'none';
            }, 2200);
            form.reset();
        });
    }
});
