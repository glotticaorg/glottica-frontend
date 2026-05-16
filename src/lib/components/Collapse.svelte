<script lang="ts">
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '$lib/components/ui/accordion';
import { untrack } from 'svelte';
import type { Snippet } from 'svelte';

const {
	children,
	title,
	open = false
}: { children: Snippet; title: string; open?: boolean } = $props();

let value = $state<string | undefined>(
	untrack(() => (open ? 'item' : undefined))
);
</script>

<Accordion type="single" bind:value class="mt-4 bg-card shadow rounded-lg">
  <AccordionItem value="item" class="border-none px-4">
    <AccordionTrigger class="font-semibold py-3">{title}</AccordionTrigger>
    <AccordionContent class="text-sm pb-4">
      {@render children?.()}
    </AccordionContent>
  </AccordionItem>
</Accordion>
