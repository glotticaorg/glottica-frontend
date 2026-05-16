<script lang="ts">
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { Button } from '$lib/components/ui/button';
import { Input } from '$lib/components/ui/input';
</script>

<PageMeta title="Template Generator" description="Customise and generate your TeX or Typst template with your institution's branding." />
<PlainDocumentHeader>Template generator</PlainDocumentHeader>

<LegalText>
	<form method="POST" class="py-4">
		<ol class="flex flex-col gap-8 w-full">
			<li class="flex gap-4">
				<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">1</span>
				<div class="flex-1">
					<legend class="text-sm font-medium mb-2">Content type</legend>
					<div class="flex flex-col lg:flex-row gap-1">
						{#each [['paper', 'Paper'], ['syllabus', 'Syllabus'], ['slides', 'Slides']] as [value, label]}
							<label class="cursor-pointer">
								<input type="radio" name="template" {value} class="sr-only peer" />
								<span class="block border border-border rounded-md px-3 py-1.5 text-sm bg-card peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-colors">{label}</span>
							</label>
						{/each}
					</div>
				</div>
			</li>
			<li class="flex gap-4">
				<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">2</span>
				<div class="flex-1">
					<legend class="text-sm font-medium mb-2" title="Please specify what typesetting application you want to use.">Application</legend>
					<div class="flex flex-col lg:flex-row gap-1">
						{#each [['tex', 'TeX'], ['typst', 'Typst']] as [value, label]}
							<label class="cursor-pointer">
								<input type="radio" name="application" {value} class="sr-only peer" />
								<span class="block border border-border rounded-md px-3 py-1.5 text-sm bg-card peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-colors">{label}</span>
							</label>
						{/each}
					</div>
				</div>
			</li>
			<li class="flex gap-4">
				<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">3</span>
				<div class="flex-1">
					<legend class="text-sm font-medium mb-2" title="You can provide your institution's logo as a .svg or .png file to be displayed on the cover page.">Affiliation logo</legend>
					<Input type="file" name="logo" aria-label="affiliation logo" accept=".svg,.png" />
				</div>
			</li>
			<li class="flex gap-4">
				<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">4</span>
				<div class="flex-1">
					<legend class="text-sm font-medium mb-2" title="Please provide a .woff, .woff2, .ttf, or .otf font file.">Font</legend>
					<Input type="file" name="font" aria-label="font" accept=".woff,.woff2,.otf,.ttf" />
				</div>
			</li>
			<li class="flex gap-4">
				<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">5</span>
				<div class="flex-1">
					<legend class="text-sm font-medium mb-2" title="Please consult your institution's style guide for the exact value.">Theme color</legend>
					<Input type="text" name="color" placeholder="#000000" aria-label="theme color" pattern="^#[0-9a-fA-F]{6}$" />
				</div>
			</li>
			<li class="flex gap-4">
				<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">6</span>
				<div class="flex-1">
					<legend class="text-sm font-medium mb-2">Citation style</legend>
					<div class="flex flex-col lg:flex-row gap-1">
						{#each [['unified', 'Unified'], ['apa', 'APA'], ['mla', 'MLA']] as [value, label]}
							<label class="cursor-pointer">
								<input type="radio" name="citations" {value} class="sr-only peer" />
								<span class="block border border-border rounded-md px-3 py-1.5 text-sm bg-card peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-colors">{label}</span>
							</label>
						{/each}
					</div>
				</div>
			</li>
			<li class="flex gap-4">
				<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 mt-0.5">7</span>
				<div class="flex-1">
					<Button type="submit">Generate!</Button>
				</div>
			</li>
		</ol>
	</form>
</LegalText>
