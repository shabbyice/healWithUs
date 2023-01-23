const SLIDES = $(".slides > .slide");

setInterval(function() {
  nextSlide();
}, 10000);

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }

  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slides > .slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  $(".slide").addClass("hidden");



currentSlide.removeClass("hidden");

}

$("#right-button").click(function() {

    nextSlide();
});

$("#left-button").click(function() {
  prevSlide();
});
