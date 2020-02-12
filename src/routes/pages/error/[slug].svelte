<script context="module">
  export async function preload(page) {
    return { id: page.params.slug };
  }
</script>

<script>
  import Error401 from "./error_401.svelte";
  import Error404 from "./error_404.svelte";
  import Error500 from "./error_500.svelte";

  export let id;
</script>

<div id="layoutError">
  <div id="layoutError_content">
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mt-4">
              {#if id === '401'}
                <Error401 />
              {:else if id === '404'}
                <Error404 />
              {:else if id === '500'}
                <Error500 />
              {/if}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
