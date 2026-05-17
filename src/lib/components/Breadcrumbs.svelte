<script lang="ts">
import { page } from '$app/stores';
import { House, ChevronLeft, ChevronRight } from '@lucide/svelte';
import { Button } from '$lib/components/ui/button';
import { resolveLabel } from '$lib/utils/breadcrumbs';

const SKIP = new Set(['learn', 'tools', 'profile', 'legal']);

const crumbs = $derived.by(() => {
	const segments = $page.url.pathname.split('/').filter(Boolean);
	return segments
		.map((segment, i) => ({
			label: resolveLabel(segment, $page.data, $page.params),
			href: '/' + segments.slice(0, i + 1).join('/')
		}))
		.filter((_, i) => !SKIP.has(segments[i]));
});

const isError = $derived(!!$page.error);

const parent = $derived(
	crumbs.length >= 2
		? crumbs[crumbs.length - 2]
		: crumbs.length === 1
			? { label: 'Home', href: '/' }
			: null
);
</script>

<nav aria-label="Breadcrumb" class="overflow-hidden">
	{#if isError}
		<Button variant="ghost" size="icon" href="/" aria-label="Home">
			<House class="size-5" />
		</Button>
	{:else}
		<!-- Mobile: home icon (root) or ‹ Parent back-link -->
		<div class="flex md:hidden items-center">
			{#if parent && parent.href !== '/'}
				<Button variant="ghost" href={parent.href} aria-label="Back to {parent.label}" class="flex items-center gap-1 px-2">
					<ChevronLeft class="size-4 shrink-0" />
					<span class="text-sm truncate">{parent.label}</span>
				</Button>
			{:else}
				<Button variant="ghost" size="icon" href="/" aria-label="Home">
					<House class="size-5" />
				</Button>
			{/if}
		</div>

		<!-- Desktop: full trail -->
		<ol class="hidden md:flex items-center">
			<li>
				<Button variant="ghost" size="icon" href="/" aria-label="Home">
					<House class="size-5" />
				</Button>
			</li>
			{#each crumbs as crumb, i}
				<li class="flex items-center gap-1 min-w-0">
					<ChevronRight class="size-4 shrink-0 text-muted-foreground" />
					{#if i === crumbs.length - 1}
						<span class="text-sm font-medium truncate">{crumb.label}</span>
					{:else}
						<a
							href={crumb.href}
							class="text-sm text-muted-foreground hover:text-foreground transition-colors truncate"
						>
							{crumb.label}
						</a>
					{/if}
				</li>
			{/each}
		</ol>
	{/if}
</nav>
