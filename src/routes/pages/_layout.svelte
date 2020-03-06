<script>
  import Row from "sveltestrap/src/Row.svelte";
  import Container from "sveltestrap/src/Container.svelte";

  import Footer from "../../components/Footer.svelte";

  export let segment;
</script>

{#if segment === 'authentication'}
  <div id="layoutAuthentication" class="bg-primary">
    <div id="layoutAuthentication_content">
      <main>
        <Container>
          <Row class="justify-content-center">
            <slot />
          </Row>
        </Container>
      </main>
    </div>
    <Footer />
  </div>
{:else}
  <div id="layoutError">
    <div id="layoutError_content">
      <main>
        <Container>
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mt-4">
                <slot />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
    <Footer />
  </div>
{/if}
