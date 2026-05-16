<script lang="ts">
import { enhance } from '$app/forms';
import InfoAlert from '$lib/components/InfoAlert.svelte';
import Input from '$lib/components/Input.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import Select from '$lib/components/Select.svelte';
import TextArea from '$lib/components/TextArea.svelte';
import { Button } from '$lib/components/ui/button';
import type { ActionData } from './$types';

const { form }: { form: ActionData } = $props();
</script>

<PageMeta title="Feedback" description="Share your feedback and ideas to help improve the Glottica platform." />
<PlainDocumentHeader>Feedback</PlainDocumentHeader>

<LegalText>
	<Paragraph>
		If you have any feedback or other ideas on how we can improve our platform, please let
		us know through this form! We try to reply to requests within three weeks of receival.
	</Paragraph>
	{#if form?.success}
		<InfoAlert title="Thank you">Your feedback has been received. We'll be in touch!</InfoAlert>
	{:else}
		<form method="POST" use:enhance class="flex flex-col gap-4">
			{#if form?.error}
				<p class="text-destructive text-sm">{form.error}</p>
			{/if}
			<Select name="topic" label="Type" required>
				<option value="accessibility">Accessibility</option>
				<option value="cybersecurity">Cybersecurity</option>
				<option value="features">Features</option>
				<option value="learning">Learning materials</option>
				<option value="productivity">Productivity tools</option>
				<option value="other">Other</option>
			</Select>
			<Input name="email" type="email" label="Email" required />
			<TextArea name="feedback" label="Feedback" required />
			<Button type="submit">Send feedback</Button>
		</form>
	{/if}
</LegalText>
