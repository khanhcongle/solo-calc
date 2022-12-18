<script>
  export let results;
</script>

<table>
  <tr>
    <th>id</th>
    <th>test</th>
    <th>expected</th>
    <th>actual</th>
    <th>result</th>
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
td, th {
  border: 1px solid #ddd;
  padding: 8px;
  min-width: 68px;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {background-color: #ddd;}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>