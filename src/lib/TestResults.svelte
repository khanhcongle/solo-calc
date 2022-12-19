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
		<tr class="{isCorrect ? 'text-green-400' : 'text-red-400'}">
      <td class="border border-slate-30 w-12">{id}</td>
      <td class="border border-slate-30 w-24">{test}</td>
      <td class="border border-slate-30 w-24">{expected}</td>
      <td class="border border-slate-30 w-24">{actual}</td>
      <td class="border border-slate-30 w-24">{isCorrect}</td>
    </tr>
	{/each}
</table>

<style>
</style>