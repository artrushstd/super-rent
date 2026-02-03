document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Anchor Links (macOS Feel)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Navbar Transformation on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Simple Parallax Effect for Hero
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        heroBg.style.transform = 'translateY(' + (offset * 0.5) + 'px)';
    });

    // 4. Testimonial Auto Slider (Smooth)
    const track = document.getElementById('testimonialTrack');
    const items = document.querySelectorAll('.testimonial-item');
    let index = 0;
    
    // Clone first few items for infinite loop illusion (Simple version)
    // Untuk performa maksimal, kita pakai reset index saja
    
    function slideTestimonial() {
        index++;
        const itemWidth = items[0].clientWidth; // Get dynamic width
        
        // Reset if end
        if (index > items.length - 1) {
            index = 0;
        }

        // Apply Translate
        // Check window width for items per slide logic
        const isDesktop = window.innerWidth >= 768;
        const translateVal = index * (isDesktop ? 50 : 100); 
        
        // Logic limit for desktop (since 2 items shown)
        if(isDesktop && index === items.length - 1) {
             index = 0; // Quick reset for simplicity
        }

        track.style.transform = `translateX(-${translateVal}%)`;
    }

    // Auto slide every 4 seconds
    setInterval(slideTestimonial, 4000);

    // 5. Intersection Observer for Fade In Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .article-card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        observer.observe(el);
    });
});
