<script>
import Link from './Link.svelte';
import InlineDocumentIcon from './icons/InlineDocumentIcon.svelte';

const { children, href } = $props();
</script>

<Link href={href} newPage>
  <InlineDocumentIcon />
  {@render children?.()}
</Link>
