<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardText from "sveltestrap/src/CardText.svelte";
</script>

<h1 class="mt-4">Sidenav Light</h1>

<Breadcrumb class="mb-4">
  <BreadcrumbItem>
    <a href=".">Dashboard</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Sidenav Light</BreadcrumbItem>
</Breadcrumb>

<Card>
  <CardBody>
    This page is an example of using the light side navigation option. By
    appending the
    <code>.sb-sidenav-light</code>
    class to the
    <code>.sb-sidenav</code>
    class, the side navigation will take on a light color scheme. The
    <code>.sb-sidenav-dark</code>
    is also available for a darker option.
  </CardBody>
</Card>
