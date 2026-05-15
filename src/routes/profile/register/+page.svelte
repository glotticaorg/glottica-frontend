<script lang="ts">
	import { enhance } from '$app/forms';
	import InfoAlert from '$lib/components/InfoAlert.svelte';
	import Input from '$lib/components/Input.svelte';
	import LegalText from '$lib/components/LegalText.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<PageMeta title="Register" description="Create a free Glottica account to start learning." />
<PageHeader>Register account</PageHeader>

<LegalText>
	{#if form?.success}
		<InfoAlert title="Account created">You can now log in with your new account.</InfoAlert>
	{:else}
		<form method="POST" use:enhance class="flex flex-col gap-4">
			{#if form?.error}
				<p class="text-error text-sm">{form.error}</p>
			{/if}
			<Input name="email" type="email" label="Email" required autocomplete="email" />
			<Input name="username" type="text" label="Username" required autocomplete="username" />
			<Input name="password" type="password" label="Password" required minlength="8" maxlength="64" autocomplete="new-password" />
			<Input name="confirm" type="password" label="Confirm password" required minlength="8" maxlength="64" autocomplete="new-password" />
			<button type="submit" class="btn btn-primary">Create account</button>
			<p class="text-sm">Already have an account? <a href="/" class="link">Log in</a></p>
		</form>
	{/if}
</LegalText>
