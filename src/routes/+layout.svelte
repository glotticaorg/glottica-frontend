<script lang="ts">
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<div class="app bg-base-200">
  <Header />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>
