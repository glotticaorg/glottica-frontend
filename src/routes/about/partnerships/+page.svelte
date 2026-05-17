<script>
import CardGrid from '$lib/components/CardGrid.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';

const universities = [
	{ name: 'University A', description: 'Mock description', logo: null, href: '/' },
	{ name: 'University B', description: 'Mock description', logo: null, href: '/' },
	{ name: 'University C', description: 'Mock description', logo: null, href: '/' },
	{ name: 'University D', description: 'Mock description', logo: null, href: '/' },
];

const publishers = [
	{ name: 'Publisher A', description: 'Mock description', logo: null, href: '/' },
	{ name: 'Publisher B', description: 'Mock description', logo: null, href: '/' },
];
</script>

<PageMeta title="Partnerships" description="Glottica's university and publisher partners." />
<PlainDocumentHeader>Partnerships</PlainDocumentHeader>

<LegalText>
	<p class="mb-10 text-muted-foreground">
		Glottica collaborates with universities and academic publishers to bring high-quality
		learning materials to students and researchers of historical languages worldwide.
	</p>

	<SectionHeader>Universities</SectionHeader>
	<CardGrid>
		{#each universities as partner}
			<GridCard href={partner.href}>
				<div class="flex justify-center mb-1">
					{#if partner.logo}
						<img src={partner.logo} alt={partner.name} class="h-10 w-auto object-contain dark:invert" />
					{:else}
						<svg class="h-10 w-10 dark:invert" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
							<circle cx="20" cy="20" r="12" fill="black" />
						</svg>
					{/if}
				</div>
				<p class="font-semibold">{partner.name}</p>
				<p class="text-sm text-muted-foreground">{partner.description}</p>
			</GridCard>
		{/each}
	</CardGrid>

	<SectionHeader>Publishers</SectionHeader>
	<CardGrid>
		{#each publishers as partner}
			<GridCard href={partner.href}>
				<div class="flex justify-center mb-1">
					{#if partner.logo}
						<img src={partner.logo} alt={partner.name} class="h-10 w-auto object-contain dark:invert" />
					{:else}
						<svg class="h-10 w-10 dark:invert" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
							<circle cx="20" cy="20" r="12" fill="black" />
						</svg>
					{/if}
				</div>
				<p class="font-semibold">{partner.name}</p>
				<p class="text-sm text-muted-foreground">{partner.description}</p>
			</GridCard>
		{/each}
	</CardGrid>
</LegalText>
