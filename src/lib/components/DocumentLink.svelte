<script>
import Link from './Link.svelte';
import { FileText } from '@lucide/svelte';

const { children, href } = $props();
</script>

<Link href={href} newPage>
  <FileText class="size-4 inline mb-1" />
  {@render children?.()}
</Link>
