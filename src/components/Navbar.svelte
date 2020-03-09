<script>
  import { createEventDispatcher } from "svelte";

  import Navbar from "sveltestrap/src/Navbar.svelte";
  import NavbarBrand from "sveltestrap/src/NavbarBrand.svelte";
  import NavbarToggler from "sveltestrap/src/NavbarToggler.svelte";
  import Nav from "sveltestrap/src/Nav.svelte";
  import NavItem from "sveltestrap/src/NavItem.svelte";
  import NavLink from "sveltestrap/src/NavLink.svelte";
  import Collapse from "sveltestrap/src/Collapse.svelte";
  import UncontrolledDropdown from "sveltestrap/src/UncontrolledDropdown.svelte";
  import DropdownToggle from "sveltestrap/src/DropdownToggle.svelte";
  import DropdownMenu from "sveltestrap/src/DropdownMenu.svelte";
  import DropdownItem from "sveltestrap/src/DropdownItem.svelte";
  import ListGroup from "sveltestrap/src/ListGroup.svelte";
  import Form from "sveltestrap/src/Form.svelte";
  import InputGroup from "sveltestrap/src/InputGroup.svelte";
  import InputGroupAddon from "sveltestrap/src/InputGroupAddon.svelte";
  import Label from "sveltestrap/src/Label.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import CustomInput from "sveltestrap/src/CustomInput.svelte";
  import Button from "sveltestrap/src/Button.svelte";

  const dispatch = createEventDispatcher();

  export let color;
  export let title;

  function searchHandle() {
    event.preventDefault();
  }

  function toggle() {
    dispatch("press");
  }
</script>

<Navbar class="sb-topnav navbar-expand" {color} dark expand="md">
  <NavbarBrand href=".">{title}</NavbarBrand>
  <Button
    size="sm"
    class="btn-link order-1 order-lg-0"
    color="none"
    id="sidebarToggle"
    on:click={toggle}>
    <i class="fas fa-bars" />
  </Button>
  <Nav class="ml-auto" navbar>
    <Form
      inline
      class="d-none d-md-inline-block ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <InputGroup>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Search for..." />
        <InputGroupAddon addonType={'append'}>
          <Button color="primary" on:click={searchHandle}>
            <i class="fas fa-search" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
    <ListGroup class="nav ml-auto ml-md-0">
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <i class="fas fa-user fa-fw ml-3" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <a class="dropdown-item" href="settings">Settings</a>
          </DropdownItem>
          <DropdownItem>
            <a class="dropdown-item" href="activity_log">Activity Log</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <a class="dropdown-item" href="pages/authentication/login">
              Logout
            </a>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ListGroup>
  </Nav>
</Navbar>
