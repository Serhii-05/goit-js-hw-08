// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulEl = document.querySelector('.gallery');


createGallery(galleryItems);
function createGallery(items) {
    const markup = items.map((item) =>
      
        `<div class="gallery__item">
 <a class="gallery__link"
      href="${item.original}"
       >
         <img
           class="gallery__image"
           src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
       />
      </a>
</div>`
  ).join('');
    ulEl.insertAdjacentHTML('beforeend', markup);
};

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

