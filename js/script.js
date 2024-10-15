
const welcomeTexts = [
      "This My Website",
    "Enno Nurwansyah Rasyidi",
];

let index = 0;
const welcomeTextElement = document.getElementById('welcome-text');

function changeText() {
    welcomeTextElement.style.transform = 'scale(1)'; 
    welcomeTextElement.style.opacity = '0'; 
    setTimeout(() => {
        welcomeTextElement.textContent = welcomeTexts[index]; 
        welcomeTextElement.style.opacity = '1'; 
        welcomeTextElement.style.transform = 'scale(1.2)'; 
        index = (index + 1) % welcomeTexts.length; 
    }, 500); 
}

setInterval(changeText, 3000);

const images = [
    "images/Enno1.jpg",
    "images/Enno2.jpg"
];

let imgIndex = 0;
const slideshowImgElement = document.getElementById('slideshow-img');

function changeImage() {
    slideshowImgElement.style.opacity = '0';
    setTimeout(() => {
        slideshowImgElement.src = images[imgIndex];
        slideshowImgElement.style.opacity = '1';
        imgIndex = (imgIndex + 1) % images.length;
    }, 500);
}

setInterval(changeImage, 4000);
