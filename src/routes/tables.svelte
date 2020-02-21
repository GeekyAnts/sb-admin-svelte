<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";

  import Table from "../components/Table.svelte";
</script>

<h1 class="mt-4">Tables</h1>
<Breadcrumb class="mb-4">
  <BreadcrumbItem>
    <a href=".">Dashboard</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Tables</BreadcrumbItem>
</Breadcrumb>

<Card class="mb-4">
  <CardBody>
    DataTables is a third party plugin that is used to generate the demo table
    below. For more information about DataTables, please visit the
    <a target="_blank" href="https://datatables.net/">
      official DataTables documentation
    </a>
    .
  </CardBody>
</Card>

<Card class="mb-4">
  <CardHeader>
    <svg
      class="svg-inline--fa fa-table fa-w-16"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="table"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-fa-i2svg="">
      <path
        fill="currentColor"
        d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51
        0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224
        416H64v-96h160v96zm0-160H64v-96h160v96zm224
        160H288v-96h160v96zm0-160H288v-96h160v96z" />
    </svg>
    DataTable Example
  </CardHeader>
  <CardBody>
    <Table />
  </CardBody>
</Card>
