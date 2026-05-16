<script>
import { FileText } from '@lucide/svelte';
import Link from './Link.svelte';

const { children, href } = $props();
</script>

<Link href={href} newPage>
  <FileText class="size-4 inline mb-1" />
  {@render children?.()}
</Link>
