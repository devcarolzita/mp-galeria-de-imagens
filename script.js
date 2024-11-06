import { images } from './dados.js';
const galleryContainer = document.querySelector('#gallery-container');
const loadMoreButton = document.querySelector('#load-more');
console.log(loadMoreButton);

console.log(galleryContainer, loadMoreButton);
const imagesPerPage = 4;
let currentImageIndex = 0;

function loadImages () {
  //Criar a div da imagem
  //Criar a imagem
  //E o source pegar do arquivos images.src
  const pageImages = images.slice(currentImageIndex, currentImageIndex + imagesPerPage);
  
  console.log(pageImages);
  
  //For -> 
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
  console.log('teste');

  //Altura da janela
  const viewportHeight = window.innerHeight;

  //Posição atual do scroll
  const scrollPosition = window.scrollY;

  //Altura total da página
  const pageHeight = document.body.offsetHeight;

  //Antes de chegar até o final da página
  const offset = pageHeight - 100;

  if(viewportHeight + scrollPosition >= offset){
    loadImages();
  }
  
})
