<script>
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import Progress from "sveltestrap/src/Progress.svelte";
  import AreaChart from "../components/Charts/AreaChart.svelte";
</script>

<div class="col-lg-12 mx-auto my-3">
  <Card class="shadow-lg border-0 rounded-lg mt-5">
    <CardHeader>
      <h3 class="text-center font-weight-light my-3">Activity Log</h3>
    </CardHeader>
    <CardBody>
      <AreaChart />
      <p class="my-3 text-center">Your Activity Chart</p>
    </CardBody>
  </Card>
</div>
