import galleryItems from "./gallery-items.js";

// console.log(createGalleryItemMarkup(galleryItems));

const galleryContainer = document.querySelector('.js-gallery');
// console.log(galleryContainer);

//modal image
const lightboxImageRef = document.querySelector('.lightbox__image');
// console.log(lightboxImageRef);

//modal
const modalRef = document.querySelector('.js-lightbox');
// console.log(modalRef);

// close modal button
const lightboxButtonCloseRef = document.querySelector('.lightbox__button');
// console.log(lightboxButtonCloseRef);

// --- 7 --- Закрытие модального окна по клику на div.lightbox__overlay.
const overlayRef = document.querySelector('.lightbox__overlay');
console.log(overlayRef);

overlayRef.addEventListener('click', closeModalClickOverlay);

function closeModalClickOverlay(event) {
    modalRef.classList.toggle('is-open');
    lightboxImageRef.src = "";
    lightboxImageRef.alt = "";
}

// markup (rezultat roboty function, eto sozdanie rozmetky)
const galleryMarkup = createGalleryItemMarkup(galleryItems);
// console.log(galleryMarkup);


// --- 1.2 --- рендер разметки по массиву данных и предоставленному шаблону.
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


// add click to galleryContainer
galleryContainer.addEventListener('click', onGalleryContainerClick);

// click modal button
lightboxButtonCloseRef.addEventListener('click', closeModal);



// --- 1.1 --- Создание разметки по массиву данных и предоставленному шаблону.
function createGalleryItemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
    <a class="gallery__link"
        href= "${original}">
    <img class="gallery__image"
        src= "${preview}"
        data-source= "${original}"
        alt= "${description}"/>
    </a>
    </li>`;
    }).join('');
}

//lovim klik na galleryContainer
function onGalleryContainerClick(event) {
   // ERROR 403
    event.preventDefault();

    // --- 2.1 --- Реализация делегирования на галерее ul.js-gallery
    const isGalleryImage = event.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }

// --- 2.2 --- получение url большого изображения.
    const urlGalleryImage = event.target.dataset.source;
    const altGalleryImag = event.target.alt;
    // console.log(urlGalleryImage);
    // console.log(altGalleryImag);

// --- 3 --- Открытие модального окна по клику на элементе галереи.
    modalRef.classList.toggle('is-open');

    
// --- 4 --- Подмена значения атрибута src элемента img.lightbox__image.
    lightboxImageRef.src = urlGalleryImage;
    lightboxImageRef.alt = altGalleryImag;
}

// --- 5 --- Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
function closeModal(event) {
    modalRef.classList.toggle('is-open');

    // --- 6 --- Очистка значения атрибута src элемента img.lightbox__image.
    lightboxImageRef.src = "";
    lightboxImageRef.alt = "";
}