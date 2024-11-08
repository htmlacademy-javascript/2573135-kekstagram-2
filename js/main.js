import {numLikes,createComments,numComments} from './util.js';
import { CREATED_PHOTO } from './data.js';
import './thumbnails.js';

const createPhoto = () => {
  let id = 1;

  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = `Фото №${id}`;
    photo.likes = numLikes();
    photo.comments = Array.from({length : numComments()}, createComments());
    id++;
    return photo;

  };
};


export const photoArray = Array.from ({length: CREATED_PHOTO}, createPhoto());
console.log(photoArray);

