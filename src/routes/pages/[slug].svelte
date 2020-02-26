<script context="module">
  export async function preload({ page, params }) {
    return { id: params.slug };
  }
</script>

<script>
  import Row from "sveltestrap/src/Row.svelte";
  import Container from "sveltestrap/src/Container.svelte";

  import Footer from "../../components/Footer.svelte";
  import Login from "./authentication/login.svelte";
  import Register from "./authentication/register.svelte";
  import Forget from "./authentication/forget_password.svelte";
  import Error401 from "./error/error_401.svelte";
  import Error404 from "./error/error_404.svelte";
  import Error500 from "./error/error_500.svelte";

  export let id;
  let route = id.split("_");
  let pageTitle = route[1].toUpperCase();
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

{#if route[0] === 'authentication'}
  <div id="layoutAuthentication" class="bg-primary">
    <div id="layoutAuthentication_content">
      <main>
        <Container>
          <Row class="justify-content-center">
            {#if route[1] === 'login'}
              <Login />
            {:else if route[1] === 'register'}
              <Register />
            {:else if route[1] === 'forget-password'}
              <Forget />
            {/if}
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
                {#if route[1] === '401'}
                  <Error401 />
                {:else if route[1] === '404'}
                  <Error404 />
                {:else if route[1] === '500'}
                  <Error500 />
                {/if}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
    <Footer />
  </div>
{/if}
