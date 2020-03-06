<script>
  import Error401 from "./error_401.svelte";
  import Error404 from "./error_404.svelte";
  import Error500 from "./error_500.svelte";

  export let segment;
</script>

{#if segment === 'error_401'}
  <Error401 />
{:else if segment === 'error_404'}
  <Error404 />
{:else if segment === 'error_500'}
  <Error500 />
{/if}
