<script lang="ts">
import Input from '$lib/components/Input.svelte';
import PageContent from '$lib/components/PageContent.svelte';
import NumberedStep from '$lib/components/NumberedStep.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
import { Badge } from '$lib/components/ui/badge';
import { Button } from '$lib/components/ui/button';

const radioClass =
	'block border border-border rounded-md px-3 py-1.5 text-sm bg-card peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-colors cursor-pointer';

let color = $state('#3b82f6');
</script>

<PageMeta title="Template Generator" description="Customise and generate your TeX or Typst template with your institution's branding." />
<PlainDocumentHeader>Template generator</PlainDocumentHeader>

<PageContent>
	<form method="POST" class="py-4">
		<div class="mb-6">
			<SectionHeader>Template settings</SectionHeader>
		</div>
		<ol class="flex flex-col gap-8">

			<NumberedStep number={1}>
				<fieldset class="flex flex-col gap-2">
					<legend class="text-sm font-medium">Content type</legend>
					<div class="flex flex-wrap gap-1">
						{#each [['paper', 'Paper'], ['syllabus', 'Syllabus'], ['slides', 'Slides']] as [value, label]}
							<label>
								<input type="radio" name="template" {value} class="sr-only peer" />
								<span class={radioClass}>{label}</span>
							</label>
						{/each}
					</div>
				</fieldset>
			</NumberedStep>

			<NumberedStep number={2}>
				<fieldset class="flex flex-col gap-2">
					<legend class="text-sm font-medium">Application</legend>
					<div class="flex flex-wrap gap-1">
						{#each [['tex', 'TeX'], ['typst', 'Typst']] as [value, label]}
							<label>
								<input type="radio" name="application" {value} class="sr-only peer" />
								<span class={radioClass}>{label}</span>
							</label>
						{/each}
					</div>
				</fieldset>
			</NumberedStep>

			<NumberedStep number={3}>
				<fieldset class="flex flex-col gap-2">
					<legend class="text-sm font-medium">Citation style</legend>
					<div class="flex flex-wrap gap-1">
						{#each [['unified', 'Unified'], ['apa', 'APA'], ['mla', 'MLA']] as [value, label]}
							<label>
								<input type="radio" name="citations" {value} class="sr-only peer" />
								<span class={radioClass}>{label}</span>
							</label>
						{/each}
					</div>
				</fieldset>
			</NumberedStep>

		</ol>

		<div class="flex items-center gap-2 mt-10 mb-6">
			<SectionHeader>Branding</SectionHeader>
			<Badge variant="secondary" class="mb-0.5">Optional</Badge>
		</div>

		<ol class="flex flex-col gap-8" start={4}>

			<NumberedStep number={4}>
				<div class="flex flex-col gap-1">
					<Input type="file" name="logo" label="Affiliation logo" accept=".svg,.png" />
					<p class="text-xs text-muted-foreground">.svg or .png, shown on the cover page</p>
				</div>
			</NumberedStep>

			<NumberedStep number={5}>
				<div class="flex flex-col gap-1">
					<Input type="file" name="font" label="Font" accept=".woff,.woff2,.otf,.ttf" />
					<p class="text-xs text-muted-foreground">.woff, .woff2, .otf, or .ttf</p>
				</div>
			</NumberedStep>

			<NumberedStep number={6}>
				<div class="flex flex-col gap-1.5">
					<label class="text-sm font-medium leading-none" for="color">Theme color</label>
					<div class="flex items-center gap-2">
						<input
							type="color"
							bind:value={color}
							class="h-9 w-12 rounded-md border border-input bg-card cursor-pointer p-1 shrink-0"
						/>
						<input
							id="color"
							type="text"
							name="color"
							bind:value={color}
							pattern="^#[0-9a-fA-F]{6}$"
							class="h-9 w-32 rounded-md border border-input bg-card px-2.5 font-mono text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:border-ring transition-[color,box-shadow]"
						/>
					</div>
					<p class="text-xs text-muted-foreground">From your institution's style guide</p>
				</div>
			</NumberedStep>

		</ol>

		<div class="mt-8">
			<Button type="submit">Generate template</Button>
		</div>
	</form>
</PageContent>
