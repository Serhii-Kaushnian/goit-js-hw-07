import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");
const { preview, original } = galleryItems;
const previewLinks = galleryItems.reduce((acc, { preview, original }) => {
  return (
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-lightbox="lbox"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</div>`
  );
}, "");
divEl.insertAdjacentHTML("beforeend", previewLinks);
let instance2;
divEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target === event.currentTarget) return;
  let instance = basicLightbox.create(
    `
    <img src=${event.target.dataset.source} >
`
  );
  instance.src = event.target.dataset.source;

  instance.show();
  // debugger;
  window.addEventListener("click", modalClose(instance));
});

function modalClose(element) {
  element.close();
}
