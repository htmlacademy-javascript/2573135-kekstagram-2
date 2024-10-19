const checkLendth = (string = '', maxSymbols = 1) => (string.length <= maxSymbols);

const isPalindrome = (string) => {
  string = string.replaceAll (' ', '').toLowerCase();

  let reversedLine = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedLine += string[i];
  }

  return string === reversedLine;
}
