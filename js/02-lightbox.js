import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery"); //доступ до списку

const gallery = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
   </a>
</li>`
  )
  .join(""); //розмітка

galleryListEl.innerHTML = gallery; //додавання розмітки до штмл

const onClickUrl = (event) => event.preventDefault(); // ф-ція, яка відміняє перехід по кліку за посиланням

const galleryLink = document.querySelectorAll(".gallery__link"); // доступ до посилання
galleryLink.forEach((link) => link.addEventListener("click", onClickUrl)); // повісили слухача на кожне посилання, перебравши псевдомасив, який отримали за допомогою кверіселекторол

galleryListEl.addEventListener("click", onClickGetBigImg); //за допомогою делегування вішаємо слухача події на список

function onClickGetBigImg(event) {
  if (event.target.nodeName !== "IMG") {
    return; //перевірка клацання саме по зображенню
  }
  let gallery = new SimpleLightbox(".gallery .gallery__link", {
    captionDelay: 250,
  });
}
