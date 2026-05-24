
// Modal Logic
const overlayout = document.getElementById("over-layout");
const popupbox = document.getElementById("popup-box");
const abiBtn = document.getElementById("abi");
const cancelBtn = document.getElementById("cancel");

function openModal() {
    overlayout.classList.add("show");
    popupbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    overlayout.classList.remove("show");
    popupbox.classList.remove("show");
    document.body.style.overflow = "";
}

abiBtn.addEventListener("click", openModal);

cancelBtn.addEventListener("click", function (event) {
    event.preventDefault();
    closeModal();
});

overlayout.addEventListener("click", closeModal);

// Advanced Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a slight delay based on the elements order to create a staggered effect
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.filter = 'blur(0px)';
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Initialize elements with a starting state
document.querySelectorAll('.animated-card').forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(60px) scale(0.95)';
    card.style.filter = 'blur(10px)';
    card.style.transition = `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`;
    observer.observe(card);
});

// Add parallax effect to floating images on mouse move
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    
    document.querySelectorAll('.floating-img').forEach(img => {
        // Combining parallax with the CSS animation is tricky, so we apply it to the wrapper
        const wrapper = img.closest('.image-wrapper');
        if(wrapper) {
            wrapper.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
        }
    });
});