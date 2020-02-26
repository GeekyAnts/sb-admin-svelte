<script>
  export let src;
  export let alt;

  let className = "";
  export { className as class };
</script>

<img class="img-fluid {className}" {src} {alt} />
