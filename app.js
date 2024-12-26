// image scale
const cardsimage = document.querySelectorAll('.image');

//  an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    root: document.querySelector('.scroll-container'), 
    threshold: 0.9, // Trigger when 90% of the card is visible
  }
);

// Observe each card
cardsimage.forEach((card) => observer.observe(card));


// loader 
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0'; 
        loader.style.pointerEvents = 'none'; 
        setTimeout(() => {
            loader.style.display = 'none'; 
        }, 500); 
    }, 6000); 
});

// scroll

document.addEventListener("DOMContentLoaded", () => {
    const scroller = document.querySelector(".scroller");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    const scrollAmount = 300;

    // Scroll forward
    nextButton.addEventListener("click", () => {
        console.log("clicked")
        scroller.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });

    // Scroll backward
    prevButton.addEventListener("click", () => {
        scroller.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });
});
