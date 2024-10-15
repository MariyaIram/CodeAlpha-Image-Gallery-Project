// Array of image sources and captions
const images = [
    { src: "images/image1.jpg", caption: "Black mountains under the stars at nighttime" },
    { src: "images/image2.jpg", caption: "Highway overlooking mountain under the skies" },
    { src: "images/image3.jpg", caption: " A trail to nature" },
    { src: "images/image4.jpg", caption: "The windoew of life " },
    { src: "images/image5.jpg", caption: "Beauty in  desert " }
];

// Current image index
let currentIndex = 0;

// Get elements
const currentImage = document.getElementById('current-image');
const imageCaption = document.getElementById('image-caption');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbnails = document.querySelectorAll('.thumbnail');

// Function to update the displayed image
function updateImage(index) {
    currentImage.classList.add('fade'); // Add fade animation
    currentImage.src = images[index].src;
    imageCaption.textContent = images[index].caption; // Update caption
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
    setTimeout(() => currentImage.classList.remove('fade'), 500); // Remove fade class after animation
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

// Event listeners for thumbnails
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateImage(index);
    });
});

// Event listener for fullscreen view
currentImage.addEventListener('click', () => {
    if (currentImage.requestFullscreen) {
        currentImage.requestFullscreen();
    }
});

// Initial image display
updateImage(currentIndex);
