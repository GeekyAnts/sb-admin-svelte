<script>
  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Footer from "../components/Footer.svelte";

  let isSidebarOpen = true;
  export let segment;
  let theme = "dark";
</script>

<Nav {segment} />
<div id="layoutSidenav">
  <Sidebar {segment} {theme} />
  <div id="layoutSidenav_content">
    <main class="container-fluid">
      <slot />
    </main>
    <Footer />
  </div>
</div>
