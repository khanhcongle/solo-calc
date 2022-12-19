function createRandomTest(id) {
  let num1 = getRandomInteger(1, 101);
  let symbol = getRandomFomular();
  let test = `${num1} ${symbol} ${getRandomIntegerBySymbol(symbol)}`;
  let expected = eval(test);
  let actual = undefined;
  let isCorrect = undefined;
  let result = { id, test, expected, isCorrect };
  console.log(result);
  return result;
}
function getRandomFomular() {
  let num = getRandomInteger(0, 4);
  switch (num) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '-';
  }
}

function getRandomIntegerBySymbol(symbol) {
  switch (symbol) {
    case '*':
    case '/':
      return getRandomInteger(2, 11);
    default:
      return getRandomInteger(1, 101);
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default createRandomTest;
