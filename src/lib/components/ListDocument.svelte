<script lang="ts">
	import type { Snippet } from "svelte";
	import DocumentLink from "./DocumentLink.svelte";
	import ListElement from "./ListElement.svelte";

  let { children, href }: { children: Snippet, href: string } = $props()
</script>

<ListElement>
	<DocumentLink href={href}>
    {@render children?.()}
  </DocumentLink>
</ListElement>
