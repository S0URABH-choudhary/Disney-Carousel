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
  let isDragging = false; // Track dragging state
let startX; // Initial touch position
let scrollStart; // Initial scroll position
let velocity = 0; // Scroll momentum
let animationFrameId; // For smooth animation

// Touch start event
scroller.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    scrollStart = scroller.scrollLeft;

    // Stop any ongoing momentum animation
    cancelAnimationFrame(animationFrameId);
});

// Touch move event
scroller.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].pageX;
    const delta = startX - currentX; // Difference in touch positions

    // Update scroll position
    scroller.scrollLeft = scrollStart + delta;

    // Calculate velocity for momentum
    velocity = delta;
});

// Touch end event
scroller.addEventListener('touchend', () => {
    isDragging = false;

    // Apply momentum scrolling
    const momentumScroll = () => {
        if (Math.abs(velocity) < 0.1) return; // Stop when velocity is very low

        scroller.scrollLeft += velocity; // Move scroll position
        velocity *= 0.95; // Reduce velocity (friction-like effect)

        // Request next animation frame
        animationFrameId = requestAnimationFrame(momentumScroll);
    };

    momentumScroll();
});
});
