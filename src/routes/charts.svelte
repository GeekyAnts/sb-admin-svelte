<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";
  import Row from "sveltestrap/src/Row.svelte";

  import AreaChart from "../components/Charts/AreaChart.svelte";
  import BarChart from "../components/Charts/BarChart.svelte";
  import PieChart from "../components/Charts/PieChart.svelte";

  let cardFooterText = "Updated yesterday at 11:59 PM";
  let areaCardTitle = "Area Chart Example";
  let barCardTitle = "Bar Chart Example";
  let pieCardTitle = "Pie Chart Example";
</script>

<h1 class="mt-4">Charts</h1>
<Breadcrumb class="mb-4">
  <BreadcrumbItem>
    <a href=".">Dashboard</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Charts</BreadcrumbItem>
</Breadcrumb>

<Card class="mb-4">
  <CardBody>
    Chart.js is a third party plugin that is used to generate the charts in this
    template. The charts below have been customized - for further customization
    options, please visit the official
    <a target="_blank" href="https://www.chartjs.org/docs/latest/">
      Chart.js documentation
    </a>
    .
  </CardBody>
</Card>

<Card class="mb-4">
  <CardHeader>
    <i class="fas fa-chart-area" />
    {areaCardTitle}
  </CardHeader>
  <CardBody>
    <AreaChart />
  </CardBody>
  <CardFooter class="small text-muted">{cardFooterText}</CardFooter>
</Card>

<Row>
  <div class="col-lg-6">
    <Card class="mb-4">
      <CardHeader>
        <i class="fas fa-chart-bar" />
        {barCardTitle}
      </CardHeader>
      <CardBody>
        <BarChart />
      </CardBody>
      <CardFooter class="small text-muted">{cardFooterText}</CardFooter>
    </Card>
  </div>
  <div class="col-lg-6">
    <Card class="mb-4">
      <CardHeader>
        <i class="fas fa-chart-pie" />
        {pieCardTitle}
      </CardHeader>
      <CardBody>
        <PieChart />
      </CardBody>
      <CardFooter class="small text-muted">{cardFooterText}</CardFooter>
    </Card>
  </div>
</Row>
