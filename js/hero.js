const track = document.getElementById('heroTrack');
const slides = track.children;
let index = 0;

function goToSlide(i) {
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => goToSlide(index + 1));
document.querySelector('.prev').addEventListener('click', () => goToSlide(index - 1));