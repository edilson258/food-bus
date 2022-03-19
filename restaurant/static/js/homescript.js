const background = document.querySelector('.header-wrap');
const image = new Image();

const arrayImages = [
  'http://127.0.0.1:5000/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg',
  'http://127.0.0.1:5000/alex-haney-CAhjZmVk5H4-unsplash.jpg',
  'http://127.0.0.1:5000/dan-gold-E6HjQaB7UEA-unsplash.jpg'
];

var count = 0;

const changeBackground = () => {
  if(count > 2) count = 0;
  const currentImage = arrayImages[count];
  background.style.backgroundImage=`url(${currentImage})`;
  count++;
}

setInterval(changeBackground, 5000);
