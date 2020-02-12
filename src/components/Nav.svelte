<script>
  export let segment;
  let isSidebar = true;
</script>

<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
  <a class="navbar-brand" href="index.html">Start Bootstrap</a>
  <button
    on:click={() => (isSidebar = !isSidebar)}
    class="btn btn-link btn-sm order-1 order-lg-0"
    id="sidebarToggle"
    href="#">
    <i class="fas fa-bars" />
  </button>
  <!-- Navbar Search-->
  <form
    class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2
    my-md-0">
    <div class="input-group">
      <input
        class="form-control"
        type="text"
        placeholder="Search for..."
        aria-label="Search"
        aria-describedby="basic-addon2" />
      <div class="input-group-append">
        <button class="btn btn-primary" type="button">
          <i class="fas fa-search" />
        </button>
      </div>
    </div>
  </form>
  <!-- Navbar-->
  <ul class="navbar-nav ml-auto ml-md-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        id="userDropdown"
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <i class="fas fa-user fa-fw" />
      </a>
      <div
        class="dropdown-menu dropdown-menu-right"
        aria-labelledby="userDropdown">
        <a class="dropdown-item" href="#">Settings</a>
        <a class="dropdown-item" href="#">Activity Log</a>
        <div class="dropdown-divider" />
        <a class="dropdown-item" href="login.html">Logout</a>
      </div>
    </li>
  </ul>
</nav>
