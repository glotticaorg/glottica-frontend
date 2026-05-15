<script>
const { children } = $props();
</script>

<div class="join join-vertical md:join-horizontal">
  {@render children?.()}
</div>
