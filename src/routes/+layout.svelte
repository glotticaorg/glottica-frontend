<script lang="ts">
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<div class="app bg-base-200 min-h-lvh flex flex-col">
  <Header />
  <main class="flex-1 flex flex-col">
    {@render children()}
  </main>
  <Footer />
</div>
