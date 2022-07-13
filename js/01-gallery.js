import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");

const previewLinks = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-lightbox="lbox"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    );
  },
  ""
);
divEl.insertAdjacentHTML("beforeend", previewLinks);

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

  window.addEventListener("keydown", modalCloseOnEscPress);

  function modalCloseOnEscPress(event) {
    if (event.code !== "Escape") return;
    instance.close();

    window.removeEventListener("keydown", modalCloseOnEscPress);
  }
});
