import galleryItems from "./gallery-items.js";

// console.log(createGalleryItemMarkup(galleryItems));

const galleryContainer = document.querySelector('.js-gallery');

// markup (rezultat roboty function, eto sozdanie rozmetky)
const galleryMarkup = createGalleryItemMarkup(galleryItems);

// add rozmetka(markup) na stranicu v element ul
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// create markup 
function createGalleryItemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
    <a class="gallery__link"
        href= "${preview}">
    <img class="gallery__image"
        src= "${preview}"
        data-source= "${original}"
        alt= "${description}"/>
    </a>
    </li>`;
    })
    .join('');
}


