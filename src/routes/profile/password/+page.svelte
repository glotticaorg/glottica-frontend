<script lang="ts">
import { enhance } from '$app/forms';
import { Button } from '$lib/components/ui/button';
import InfoAlert from '$lib/components/InfoAlert.svelte';
import Input from '$lib/components/Input.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageHeader from '$lib/components/PageHeader.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import type { ActionData } from './$types';

const { form }: { form: ActionData } = $props();
</script>

<PageMeta title="Reset Password" description="Reset your Glottica account password." />
<PageHeader>Reset password</PageHeader>

<LegalText>
	{#if form?.success}
		<InfoAlert title="Check your inbox">If an account exists for that email, a reset link is on its way.</InfoAlert>
	{:else}
		<form method="POST" use:enhance class="flex flex-col gap-4">
			{#if form?.error}
				<p class="text-destructive text-sm">{form.error}</p>
			{/if}
			<Input name="email" type="email" label="Email" required autocomplete="email" />
			<Button type="submit">Send reset link</Button>
			<p class="text-sm">Remembered it? <a href="/" class="underline underline-offset-4 text-primary">Log in</a></p>
		</form>
	{/if}
</LegalText>
