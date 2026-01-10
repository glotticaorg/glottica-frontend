<script>
	import InlineDocumentIcon from "./icons/InlineDocumentIcon.svelte";
	import Link from "./Link.svelte";

  let { children, href } = $props()
</script>

<Link href={href} newPage>
  <InlineDocumentIcon />
  {@render children?.()}
</Link>
