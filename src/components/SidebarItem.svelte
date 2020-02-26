<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let text = "";
  export let href = "javascript:void(0)";
  export let leftIcon = false;
  export let rightIcon = false;

  let className = "";
  export { className as class };
  const handleClick = () => {
    dispatch("press");
  };
</script>

<a class="nav-link {className}" {href} on:click={handleClick}>
  {#if leftIcon}
    <div class="sb-nav-link-icon">
      <slot name="leftIcon" />
    </div>
  {/if}
  {text}
  {#if rightIcon}
    <div class="sb-sidenav-collapse-arrow">
      <slot name="rightIcon" />
    </div>
  {/if}
</a>
