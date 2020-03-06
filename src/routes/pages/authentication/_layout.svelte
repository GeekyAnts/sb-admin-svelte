<script>
  import Login from "./login.svelte";
  import Register from "./register.svelte";
  import ForgetPassword from "./forget_password.svelte";

  export let segment;
</script>

{#if segment === 'login'}
  <Login />
{:else if segment === 'register'}
  <Register />
{:else if segment === 'forget_password'}
  <ForgetPassword />
{/if}
