console.log("hello there you cheeky guy haha")

class SlideShow {
    constructor(sliderContainer) {
        this.slides = sliderContainer.querySelectorAll("img");
        this.slideIndex = 0;

        if (this.slides.length > 0) {
            this.slides[this.slideIndex].classList.add("displaySlide");
        }

        // Attach event listeners for buttons
        const prevButton = sliderContainer.querySelector(".prev");
        const nextButton = sliderContainer.querySelector(".next");

        if (prevButton) prevButton.addEventListener("click", () => this.prevSlide());
        if (nextButton) nextButton.addEventListener("click", () => this.nextSlide());
    }

    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove("displaySlide"));

        this.slideIndex = (index + this.slides.length) % this.slides.length; // Loop back when reaching the end
        this.slides[this.slideIndex].classList.add("displaySlide");
    }

    prevSlide() {
        this.showSlide(this.slideIndex - 1);
    }

    nextSlide() {
        this.showSlide(this.slideIndex + 1);
    }
}

// Initialize all sliders independently
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slider").forEach(slider => {
        new SlideShow(slider);
    });
});


