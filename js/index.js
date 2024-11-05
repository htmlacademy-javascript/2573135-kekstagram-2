import { MIN_COMMENTS, MAX_COMMENTS, MIN_LIKES, MAX_LIKES, MESSAGE_SET, NAMES_SET, MIN_AVATAR, MAX_AVATAR} from './data';
import { getRandomInteger } from './util';
const mockComment = () => ({

});

const mockPhoto = (id = 1) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `Описание фотографии ${id}`,
  likes: getRandomInteger(MIN_LIKES,MAX_LIKES),
  comments = Array.from({length : numComments()}, createComments()),
  mockComment,
});

export const mockedPhotos = Array.from({ length: PHOTOS_AMOUNT }, (_, index) => mockPhoto(index + 1));