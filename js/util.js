//Функция получения случайного числа из заданного диапазона

import { MIN_COMMENTS, MAX_COMMENTS, MIN_LIKES, MAX_LIKES, MESSAGE_SET, NAMES_SET, CREATED_PHOTO} from "./data";

export const getRandomInteger = (a, b) => {

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  let previousResult = -1;
  return () => {
    const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
    // Исключения повторяющегося значения предыдущего вызова для коментариев
    if (previousResult !== result) {
      previousResult = result;
      return result;
    }
    return result === upper ? lower : result + 1;
  };

};

//Создание вложенного объекта Comments
export const createComments = () => {
  let id = 1;
  const messageArray = MESSAGE_SET.split('. ');
  const nameArray = NAMES_SET.split('. ');
  const indexMessageArr = getRandomInteger (0, messageArray.length - 1);
  const indexNameArr = getRandomInteger (0, nameArray.length - 1);

  // Разобьем комментарии с разделителем - !
  massageArray.splice(0, 1, massageArray[0].split('! ')[0],massageArray[0].split('! ')[1]);
  return () => {
    const comment = {};
    const idAvatar = getRandomInteger (1, 6);
    comment.id = id;
    comment.avatar = `img/avatar-${idAvatar()}.svg`;
    comment.message = `${messageArray[indexMessageArr()]}. ${massageArray[indexMessageArr()]}`;
    comment.name = `${nameArray[indexNameArr()]}`;
    id++;
    return comment;
  };

};

//Количество коментариев
export const numComments = getRandomInteger (MIN_COMMENTS, MAX_COMMENTS);
//количество лайков
numLikes = getRandomInteger (MIN_LIKES, MAX_LIKES);