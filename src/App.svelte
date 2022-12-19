<script>
  import svelteLogo from './assets/svelte.svg'
  import TestResults from './lib/TestResults.svelte'
  import createRandomTest from './lib/TestGenerator.js'

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
      <div class="pt-2 pb-2">
        <label for="answer">{currentTest.test} = </label>
        <input id="answer" name="answer" class="border border-gray-300" autocomplete="off">
      </div>
      <TestResults {results} />
    </form>
  </div>
</main>

<style>
</style>
