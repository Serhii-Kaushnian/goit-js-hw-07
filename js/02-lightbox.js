import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");
const previewLinks = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      acc +
      `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-lightbox="lbox"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`
    );
  },
  ""
);
ulEl.insertAdjacentHTML("beforeend", previewLinks);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
  showCounter: false,
  nextOnImageClick: true,
  scrollZoom: false,
});
