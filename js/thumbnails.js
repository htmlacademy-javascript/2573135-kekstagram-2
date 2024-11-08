import { photoArray } from './main.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

photoArray.forEach((item) => {
  const thumbnail = template.cloneNode(deep: true);
  const photo = item;
  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  //записали кол-во коментариев
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

  //записали кол-во лайков
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  container.appendChild(thumbnail);
  });