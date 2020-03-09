<script>
  import Container from "sveltestrap/src/Container.svelte";

  import Navbar from "../components/Navbar.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;

  let theme = "dark";
  let color = "dark";
  let title = "SB Admin Svelte";
  let toggle = false;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if segment !== 'pages'}
  <div class="sb-nav-fixed" class:sb-sidenav-toggled={toggle}>
    <Navbar {segment} {color} {title} on:press={() => (toggle = !toggle)} />
    <div id="layoutSidenav">
      <Sidebar {segment} {theme} />
      <div id="layoutSidenav_content">
        <main>
          <Container fluid={true}>
            <slot />
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  </div>
{:else}
  <body>
    <slot />
  </body>
{/if}
