<script lang="ts">
import { page } from '$app/state';
import PageHeader from '$lib/components/PageHeader.svelte';
import ResponsiveAlignment from '$lib/components/ResponsiveAlignment.svelte';
import ResponsiveFlexHero from '$lib/components/ResponsiveFlexHero.svelte';
import { Bug } from '@lucide/svelte';
</script>

<ResponsiveFlexHero>
	<Bug class="size-64" />
	<ResponsiveAlignment>
		<PageHeader>{page.status}: {page.error?.message}</PageHeader>
		<p class="py-6">Oops! Something went wrong!</p>
	</ResponsiveAlignment>
</ResponsiveFlexHero>
