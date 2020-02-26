<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardText from "sveltestrap/src/CardText.svelte";
  import CardSubtitle from "sveltestrap/src/CardSubtitle.svelte";
  import Row from "sveltestrap/src/Row.svelte";

  import Image from "../components/Image.svelte";
  import DashboardCard from "../components/DashboardCard.svelte";
  import CustomCard from "../components/CustomCard.svelte";
  import Table from "../components/Table.svelte";
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1 class="mt-4">Dashboard</h1>
<Breadcrumb class="mb-4">
  <BreadcrumbItem active>Dashboard</BreadcrumbItem>
</Breadcrumb>
<Row>
  <div class="col-xl-3 col-md-6">
    <DashboardCard cardTitle="Primary Card" cardColor="primary" />
  </div>
  <div class="col-xl-3 col-md-6">
    <DashboardCard cardTitle="Warning Card" cardColor="warning" />
  </div>
  <div class="col-xl-3 col-md-6">
    <DashboardCard cardTitle="Success Card" cardColor="success" />
  </div>
  <div class="col-xl-3 col-md-6">
    <DashboardCard cardTitle="Danger Card" cardColor="danger" />
  </div>
</Row>
<Row>
  <div class="col-xl-6">
    <CustomCard cardTitle="Area Chart Example" cardIcon="fas fa-chart-area">
      <Image src="area_chart.png" alt="area_chart" />
    </CustomCard>
  </div>
  <div class="col-xl-6">
    <CustomCard cardTitle="Bar Chart Example" cardIcon="fas fa-chart-bar">
      <Image src="bar_chart.png" alt="bar_chart" />
    </CustomCard>
  </div>
</Row>
<CustomCard cardTitle="DataTable Example" cardIcon="fas fa-table">
  <Table />
</CustomCard>
