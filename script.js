import { images } from './dados.js';
const galleryContainer = document.querySelector('#gallery-container');
const loadMoreButton = document.querySelector('#load-more');
const imagesPerPage = 4;
let currentImageIndex = 0;

function loadImages () {
  const pageImages = images.slice(currentImageIndex, currentImageIndex + imagesPerPage);  
  pageImages.forEach(images => {    
    const galleryItem = document.createElement('div');
    galleryItem.className = `gallery-item ${images.wide ? 'wide' : ''}`;
    
    const imgItem = document.createElement('img');
    imgItem.src = images.src;
    imgItem.alt = images.alt;

    galleryItem.appendChild(imgItem);
    galleryContainer.appendChild(galleryItem);
  });

  currentImageIndex += imagesPerPage;
  if(currentImageIndex >= images.length){
    loadMoreButton.style.display = 'none';
  }
}


loadMoreButton.addEventListener('click', loadImages);

window.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const pageHeight = document.body.offsetHeight;
  const offset = pageHeight - 100;

  if(viewportHeight + scrollPosition >= offset){
    loadImages();
  }
  
})
