document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Marketplace Filter Logic (Inti Fitur)
    window.filterSelection = function(category) {
        const items = document.getElementsByClassName("filter-item");
        const btns = document.getElementsByClassName("filter-btn");

        // Update Active Button
        for (let btn of btns) {
            btn.classList.remove("active");
            if (btn.getAttribute("onclick").includes(category)) {
                btn.classList.add("active");
            }
        }

        // Show/Hide Items with Animation
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("fade-in-up"); // Reset animation
            
            if (category === "all") {
                items[i].style.display = "flex";
                setTimeout(() => items[i].classList.add("fade-in-up"), 10);
            } else {
                if (items[i].classList.contains(category)) {
                    items[i].style.display = "flex";
                    setTimeout(() => items[i].classList.add("fade-in-up"), 10);
                } else {
                    items[i].style.display = "none";
                }
            }
        }
    };

    // 2. Hero Slider (Auto fade)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(nextSlide, 5000);

    // --- GANTI BAGIAN SMOOTH SCROLL DI script.js DENGAN INI ---

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
    
            // PENCEGAHAN ERROR:
            // Jika link cuma "#" atau kosong, jangan lakukan apa-apa
            if (targetId === '#' || targetId === '') {
                e.preventDefault();
                return; 
            }
    
            e.preventDefault();
            const target = document.querySelector(targetId);
            
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Initialize first animation
    filterSelection('all');
});
