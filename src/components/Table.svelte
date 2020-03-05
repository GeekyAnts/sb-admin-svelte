<script>
  import Table from "sveltestrap/src/Table.svelte";

  const tableHeading = ["#", "First Name", "Last-Name", "Username"];
  const tableData = [
    { SNo: "1", firstName: "Mark", lastName: "Otto", userName: "@mdo" },
    { SNo: "2", firstName: "Jacob", lastName: "Thornton", userName: "@fat" },
    { SNo: "3", firstName: "Larry", lastName: "the Bird", userName: "@twitter" }
  ];
</script>

<Table bordered responsive>
  <thead>
    <tr>
      {#each tableHeading as heading}
        <th>{heading}</th>
      {/each}
    </tr>
  </thead>
  <tbody>

    {#each tableData as data}
      <tr>
        <th scope="row">{data.SNo}</th>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.userName}</td>
      </tr>
    {/each}
  </tbody>
</Table>
