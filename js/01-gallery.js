import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryListEl.innerHTML = gallery;

galleryListEl.addEventListener("click", onClickGetBigImg);

function onClickGetBigImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  const onClickEscape = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
    galleryListEl.removeEventListener("keydown", onClickEscape);
  };

  galleryListEl.addEventListener("keydown", onClickEscape);
}
