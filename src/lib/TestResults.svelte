<script>
  export let results;
</script>

<table class="table-auto">
  <tr>
    <th class="border border-slate-300">id</th>
    <th class="border border-slate-300">test</th>
    <th class="border border-slate-300">expected</th>
    <th class="border border-slate-300">actual</th>
    <th class="border border-slate-300">result</th>
  </tr>
	{#each results as { id, test, expected, actual, isCorrect }, i}
		<tr>
      <td>{id}</td>
      <td>{test}</td>
      <td>{expected}</td>
      <td>{actual}</td>
      <td>{isCorrect}</td>
    </tr>
	{/each}
</table>

<style>
</style>