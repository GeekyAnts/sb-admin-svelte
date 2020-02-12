<script>
  export let segment;
  export let theme;

  $: sidenav_theme = `sb-sidenav-${theme}`;
</script>

<div id="layoutSidenav_nav">
  <nav class="sb-sidenav accordion {sidenav_theme}" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
      <div class="nav">
        <div class="sb-sidenav-menu-heading">Core</div>
        <a class="nav-link active" href=".">
          <div class="sb-nav-link-icon">
            <svg
              class="svg-inline--fa fa-tachometer-alt fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="tachometer-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06
                144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58
                27.44-15.2C561.75 422.26 576 372.8 576
                320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32
                23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97
                6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96
                384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33
                32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33
                32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352
                364.54 352 384c0 11.72-3.38 22.55-8.88
                32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43
                59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57
                4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29
                7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32
                32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67
                0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
            </svg>
            <!-- <i class="fas fa-tachometer-alt"></i> -->
          </div>
          Dashboard
        </a>
        <div class="sb-sidenav-menu-heading">Interface</div>
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseLayouts"
          aria-expanded="false"
          aria-controls="collapseLayouts">
          <div class="sb-nav-link-icon">
            <svg
              class="svg-inline--fa fa-columns fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="columns"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48
                48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224
                416H64V160h160v256zm224 0H288V160h160v256z" />
            </svg>
            <!-- <i class="fas fa-columns"></i> -->
          </div>
          Layouts
          <div class="sb-sidenav-collapse-arrow">
            <svg
              class="svg-inline--fa fa-angle-down fa-w-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4
                24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6
                22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
            <!-- <i class="fas fa-angle-down"></i> -->
          </div>
        </a>
        <div
          class="collapse"
          id="collapseLayouts"
          aria-labelledby="headingOne"
          data-parent="#sidenavAccordion"
          style="">
          <nav class="sb-sidenav-menu-nested nav">
            <a
              on:click={() => (theme = 'dark')}
              class="nav-link"
              href="layouts/static_navigation">
              Static Navigation
            </a>
            <a
              on:click={() => (theme = 'light')}
              class="nav-link"
              href="layouts/light_sidenav">
              Light Sidenav
            </a>
          </nav>
        </div>
        <a
          on:click={() => (theme = 'dark')}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages">
          <div class="sb-nav-link-icon">
            <svg
              class="svg-inline--fa fa-book-open fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="book-open"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64
                2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49
                69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43
                30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73
                87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0
                62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59
                12.11 218.77 46.95 10.62 5.35 23.21-1.94
                23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z" />
            </svg>
            <!-- <i class="fas fa-book-open"></i> -->
          </div>
          Pages
          <div class="sb-sidenav-collapse-arrow">
            <svg
              class="svg-inline--fa fa-angle-down fa-w-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4
                24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6
                22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
            <!-- <i class="fas fa-angle-down"></i> -->
          </div>
        </a>
        <div
          class="collapse"
          id="collapsePages"
          aria-labelledby="headingTwo"
          data-parent="#sidenavAccordion"
          style="">
          <nav
            class="sb-sidenav-menu-nested nav accordion"
            id="sidenavAccordionPages">
            <a
              on:click={() => (theme = 'dark')}
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#pagesCollapseAuth"
              aria-expanded="false"
              aria-controls="pagesCollapseAuth">
              Authentication
              <div class="sb-sidenav-collapse-arrow">
                <svg
                  class="svg-inline--fa fa-angle-down fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg="">
                  <path
                    fill="currentColor"
                    d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6
                    0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4
                    96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6
                    0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                </svg>
                <!-- <i class="fas fa-angle-down"></i> -->
              </div>
            </a>
            <div
              class="collapse"
              id="pagesCollapseAuth"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordionPages">
              <nav class="sb-sidenav-menu-nested nav">
                <a class="nav-link" href="login">Login</a>
                <a class="nav-link" href="register">Register</a>
                <a class="nav-link" href="password">Forgot Password</a>
              </nav>
            </div>
            <a
              on:click={() => (theme = 'dark')}
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#pagesCollapseError"
              aria-expanded="false"
              aria-controls="pagesCollapseError">
              Error
              <div class="sb-sidenav-collapse-arrow">
                <svg
                  class="svg-inline--fa fa-angle-down fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg="">
                  <path
                    fill="currentColor"
                    d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6
                    0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4
                    96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6
                    0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                </svg>
                <!-- <i class="fas fa-angle-down"></i> -->
              </div>
            </a>
            <div
              class="collapse"
              id="pagesCollapseError"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordionPages">
              <nav class="sb-sidenav-menu-nested nav">
                <a class="nav-link" href="pages/error/{'401'}">401 Page</a>
                <a class="nav-link" href="pages/error/{'404'}">404 Page</a>
                <a class="nav-link" href="pages/error/{'500'}">500 Page</a>
              </nav>
            </div>
          </nav>
        </div>
        <div class="sb-sidenav-menu-heading">Addons</div>
        <a on:click={() => (theme = 'dark')} class="nav-link" href="charts">
          <div class="sb-nav-link-icon">
            <svg
              class="svg-inline--fa fa-chart-area fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chart-area"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6
                0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12
                12v308h436zM372.7 159.5L288
                216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96
                248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z" />
            </svg>
            <!-- <i class="fas fa-chart-area"></i> -->
          </div>
          Charts
        </a>
        <a on:click={() => (theme = 'dark')} class="nav-link" href="tables">
          <div class="sb-nav-link-icon">
            <svg
              class="svg-inline--fa fa-table fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="table"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg="">
              <path
                fill="currentColor"
                d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48
                48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224
                416H64v-96h160v96zm0-160H64v-96h160v96zm224
                160H288v-96h160v96zm0-160H288v-96h160v96z" />
            </svg>
            <!-- <i class="fas fa-table"></i> -->
          </div>
          Tables
        </a>
      </div>
    </div>
    <div class="sb-sidenav-footer">
      <div class="small">Logged in as:</div>
      Start Bootstrap
    </div>
  </nav>
</div>
