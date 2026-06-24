let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let track = document.getElementById('heroTrack');
let slides = Array.from(track.children); 

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

let index = 1;
let isTransitioning = false; 

track.style.transition = 'none';
track.style.transform = `translateX(-${index * 100}%)`;

function goToSlide(targetIndex) {
  if (isTransitioning) return;
  isTransitioning = true;
  
  index = targetIndex;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${index * 100}%)`;
}

track.addEventListener('transitionend', () => {
  isTransitioning = false;
  
  if (index === track.children.length - 1) {
    track.style.transition = 'none'; 
    index = 1;                      
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  
  if (index === 0) {
    track.style.transition = 'none'; 
    index = track.children.length - 2;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

nextBtn.addEventListener('click', () => goToSlide(index + 1));
prevBtn.addEventListener('click', () => goToSlide(index - 1));