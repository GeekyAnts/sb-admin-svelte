<script>
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";

  import Image from "../components/Image.svelte";

  export let cardTitle = "";
  export let cardIcon = "";
</script>

<Card class="mb-4">
  <CardHeader>
    <i class={cardIcon} />
    {cardTitle}
  </CardHeader>
  <CardBody>
    <slot />
    <slot name="chartCaption" />
  </CardBody>
</Card>
