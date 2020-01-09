const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const track2 = document.querySelector(".carousel__track2")
const slides2 = Array.from(track2.children)
const track3 = document.querySelector(".carousel__track3")
const slides3 = Array.from(track3.children)
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const dotsNav2 = document.querySelector(".carousel__nav2");
const dots2 = Array.from(dotsNav2.children);
const dotsNav3 = document.querySelector(".carousel__nav3");
const dots3 = Array.from(dotsNav3.children);
const slideWidth = slides[0].getBoundingClientRect().width;

console.log("hello");

const moveToSlide = (track, currentSlide, targetSlide) => {

    currentSlide.classList.add("hidden");
    currentSlide.classList.remove("current-slide");
    
    targetSlide.classList.add("current-slide");
    targetSlide.classList.remove("hidden");

    console.log(currentSlide.classList)
    console.log(targetSlide.classList)
};

const updateDots = (currentDot, targetDot) => {

    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");

};

//when i click left, move slides to the left


//when i click nav indicator, go to selected slide

dotsNav.addEventListener("click", e => {

    //which indicator was clicked?
    const targetDot = e.target.closest("button");
    
    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

});

dotsNav2.addEventListener("click", e => {

    //which indicator was clicked?
    const targetDot = e.target.closest("button");
    
    if (!targetDot) return;

    const currentSlide = track2.querySelector(".current-slide");

    const currentDot = dotsNav2.querySelector(".current-slide");
    const targetIndex = dots2.findIndex(dot => dot === targetDot);
    const targetSlide = slides2[targetIndex];

    moveToSlide(track2, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

});

dotsNav3.addEventListener("click", e => {

    //which indicator was clicked?
    const targetDot = e.target.closest("button");
    
    if (!targetDot) return;

    const currentSlide = track3.querySelector(".current-slide");
    
    const currentDot = dotsNav3.querySelector(".current-slide");
    const targetIndex = dots3.findIndex(dot => dot === targetDot);
    const targetSlide = slides3[targetIndex];

    moveToSlide(track3, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

});

