<script lang="ts">
import { enhance } from '$app/forms';
import FlexHero from '$lib/components/FlexHero.svelte';
import InfoAlert from '$lib/components/InfoAlert.svelte';
import Input from '$lib/components/Input.svelte';
import Link from '$lib/components/Link.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import { Button } from '$lib/components/ui/button';
import { Card, CardContent } from '$lib/components/ui/card';
import { ShieldCheck } from '@lucide/svelte';
import type { ActionData } from './$types';

const { form }: { form: ActionData } = $props();
</script>

<PageMeta title="Reset Password" description="Reset your Glottica account password." />

<FlexHero>
	<div class="relative overflow-hidden w-full">
		<div class="absolute top-16 lg:top-8 left-16 opacity-10 rotate-12 overflow-hidden pointer-events-none">
			<ShieldCheck class="size-64" />
		</div>
		<div class="relative flex flex-col lg:flex-row items-center gap-12 px-8 py-16 max-w-4xl mx-auto">
			<Card class="bg-card/90 shadow w-full max-w-sm shrink-0">
				<CardContent>
					{#if form?.success}
						<InfoAlert title="Check your inbox">If an account exists for that email, a reset link is on its way.</InfoAlert>
					{:else}
						<form method="POST" use:enhance class="flex flex-col gap-4">
							{#if form?.error}
								<p class="text-destructive text-sm">{form.error}</p>
							{/if}
							<Input name="email" type="email" label="Email" required autocomplete="email" />
							<Button type="submit" class="w-full mt-2">Send reset link</Button>
							<p class="text-sm text-center text-muted-foreground">Remembered it? <Link href="/">Log in</Link></p>
						</form>
					{/if}
				</CardContent>
			</Card>

			<div class="flex flex-col gap-4 text-center lg:text-left flex-1">
				<h1 class="text-5xl font-bold">Reset your password.</h1>
				<p class="text-muted-foreground">
					Enter the email address linked to your account and we'll send you a reset link.
				</p>
			</div>
		</div>
	</div>
</FlexHero>
