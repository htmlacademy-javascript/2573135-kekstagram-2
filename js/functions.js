/*
Напишите несколько функций и убедитесь, что они работают правильно. Аргументы для тестирования функций можете брать из примеров ниже или придумать самостоятельно.

На данном этапе можно не беспокоиться о типах данных аргументов и о том, как должна вести себя функция, если ей были переданы неверные аргументы.

Задание считается выполненным, если в проекте описаны следующие функции:

    Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:

     Строка короче 20 символов
    имяФункции('проверяемая строка', 20); // true
     Длина строки ровно 18 символов
    имяФункции('проверяемая строка', 18); // true
     Строка длиннее 10 символов
    имяФункции('проверяемая строка', 10); // false
*/

//function checkLendth (string = '', maxSymbols = 1) {
    //тернарный оператор(условие, то... иначе...)
    // return (string.length <= maxSymbols) ? true : false;
     //return string.length <= maxSymbols;
     //}
const checkLendth = (string = '', maxSymbols = 1) => (string.length <= maxSymbols);

const isPalindrome = (string) => {
  string = string.replaceAll (' ', '').toLowerCase(); // удалили пробелы и привели к нижнему регистру

  let reversedLine = '';
  for (let i = string.length - 1; i >=0; i--) {
    reversedLine += string[i];
  }

  return string === reversedLine;
}

// 2й вариант проверки палиндрома

const veryfyPalindrome = (string) => {
  const normlizedString = string.replaceAll(' ', '').toUpperCase();
  let reversedString = normlizedString.split('').reverse().join('');
  return reversedString === normlizedString;
};

isPalindrome('топот');
isPalindrome('ДоВод');
