<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";
  import Row from "sveltestrap/src/Row.svelte";

  import Image from "../components/Image.svelte";
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
    Area Chart Example
  </CardHeader>
  <CardBody>
    <Image src="area_chart_big.png" alt="area_chart" />
  </CardBody>
  <CardFooter class="small text-muted">
    Updated yesterday at 11:59 PM
  </CardFooter>
</Card>

<Row>
  <div class="col-lg-6">
    <Card class="mb-4">
      <CardHeader>
        <i class="fas fa-chart-bar" />
        Bar Chart Example
      </CardHeader>
      <CardBody>
        <Image src="bar_chart_big.png" alt="bar_chart" />
      </CardBody>
      <CardFooter class="small text-muted">
        Updated yesterday at 11:59 PM
      </CardFooter>
    </Card>
  </div>
  <div class="col-lg-6">
    <Card class="mb-4">
      <CardHeader>
        <i class="fas fa-chart-pie" />
        Pie Chart Example
      </CardHeader>
      <CardBody>
        <Image src="pie_chart.png" alt="bar_chart" />
      </CardBody>
      <CardFooter class="small text-muted">
        Updated yesterday at 11:59 PM
      </CardFooter>
    </Card>
  </div>
</Row>
