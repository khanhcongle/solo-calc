<script>
  import svelteLogo from './assets/svelte.svg'
  import TestResults from './lib/TestResults.svelte'

  function createRandomTest(id) {
    let num1 = getRandomInteger(1, 101);
    let symbol = getRandomFomular()
    let test = `${num1} ${symbol} ${getRandomIntegerBySymbol(symbol)}`;
    let expected = eval(test);
    let actual = undefined;
    let isCorrect = undefined;
    let result = {id, test, expected, isCorrect };
    console.log(result);
    return result;
  }
  function getRandomFomular() {
    let num = getRandomInteger(0, 4);
    switch(num) {
      case 0:
        return "+";
      case 1:
        return "-";
      case 2:
        return "*";
      default:
        return "-";
    }
  }

  function getRandomIntegerBySymbol(symbol) {
    switch(symbol) {
      case "*":
      case "/":
        return getRandomInteger(2, 11);
      default:
        return getRandomInteger(1, 101);
    }
  }

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  let currentTest = createRandomTest(0);

  let results = [];
  function onSubmit(event) {
    currentTest.actual = event.target['answer'].value;
    currentTest.isCorrect = eval(currentTest.expected) == eval(currentTest.actual);
    results.unshift(currentTest);

    results = results;

    event.target['answer'].value = '';
    currentTest = createRandomTest(results.length);
  }
</script>

<main>
  <div class="card">
    <form on:submit|preventDefault={onSubmit}>
      <label for="answer">{currentTest.test} = </label>
      <input id="answer" name="answer">
      <TestResults {results} />
    </form>
  </div>
</main>

<style>
</style>
