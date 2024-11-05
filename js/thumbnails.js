import { mockedPhotos } from "../photos";

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

mockedPhotos.forEach(() => {
  const thumbnail = template.cloneNode(true);
  const photo = mockedPhotos[0];
const image = thumbnail.querySelector('.picture__img');

image.src = photo.url;
image.alt = photo.description;

//записали кол-во коментариев
thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

//записали кол-во лайков
thumbnail.querySelector('.picture__likes').textContent = photo.likes;

container.appendChild(thumbnail);
});