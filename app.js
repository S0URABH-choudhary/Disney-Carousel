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
