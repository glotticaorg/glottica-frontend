<script lang="ts">
import { Download, Package } from '@lucide/svelte';
import CalloutBox from '$lib/components/CalloutBox.svelte';
import PageContent from '$lib/components/PageContent.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { Badge } from '$lib/components/ui/badge';
import { Button } from '$lib/components/ui/button';
import { hotkeys } from '$lib/data/hotkeys';

let expanded = $state(false);
</script>

<PageMeta title="Hotkeys" description="Download keyboard hotkey configurations for Indo-European languages and scripts." />
<PlainDocumentHeader>Hotkeys for Indo-Europeanists</PlainDocumentHeader>

<PageContent>
	<p class="mb-6 text-muted-foreground">
		Keyboard configurations supporting Indo-European languages and orthographies, using language
		"modes" so you can switch between character sets without any hassle.
	</p>

	<div class="mb-8">
		<CalloutBox title="Full bundle" description="Download a single bundle containing configurations for all supported languages and modes.">
			{#snippet icon()}<Package class="size-5 text-muted-foreground shrink-0 mt-0.5" />{/snippet}
			{#snippet headerAction()}
				<button
					onclick={() => expanded = !expanded}
					class="text-xs font-medium px-2 py-0.5 rounded-full border border-border bg-secondary text-secondary-foreground hover:bg-muted hover:text-muted-foreground transition-colors cursor-pointer"
				>
					All {hotkeys.length} languages {expanded ? '▴' : '▾'}
				</button>
			{/snippet}
			{#if expanded}
				<div class="flex flex-wrap gap-1 mt-1">
					{#each hotkeys as lang}
						<Badge variant="outline" class="text-xs">{lang.name}</Badge>
					{/each}
				</div>
			{/if}
			<div class="mt-3">
				<Button href="/tools/hotkeys">
					<Download class="size-4" />
					Download full bundle
				</Button>
			</div>
		</CalloutBox>
	</div>

	<p class="mb-4 text-sm text-muted-foreground">Alternatively, download a configuration for a single language:</p>

	<div class="flex flex-col divide-y divide-border rounded-xl border border-border bg-card shadow-sm overflow-hidden">
		{#each hotkeys as lang}
			<div class="flex items-center justify-between gap-4 px-5 py-3">
				<div class="flex items-center gap-3">
					<span class="font-medium">{lang.name}</span>
					<Badge variant="outline" class="text-xs">{lang.branch}</Badge>
				</div>
				<Button variant="outline" size="sm" href="/tools/hotkeys" class="shrink-0">
					<Download class="size-3.5" />
					Download
				</Button>
			</div>
		{/each}
	</div>
</PageContent>
