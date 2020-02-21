<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardText from "sveltestrap/src/CardText.svelte";
</script>

<h1 class="mt-4">Static Navigation</h1>
<Breadcrumb class="mb-4">
  <BreadcrumbItem>
    <a href=".">Dashboard</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Static Navigation</BreadcrumbItem>
</Breadcrumb>

<Card class="mb-4">
  <CardBody>
    <p class="mb-0">
      This page is an example of using static navigation. By removing the
      <code>.sb-nav-fixed</code>
      class from the
      <code>body</code>
      , the top navigation and side navigation will become static on scroll.
      Scroll down this page to see an example.
    </p>
  </CardBody>
</Card>
<div style="height: 100vh;" />
<Card class="mb-4">
  <CardBody>
    When scrolling, the navigation stays at the top of the page. This is the end
    of the static navigation demo.
  </CardBody>
</Card>
