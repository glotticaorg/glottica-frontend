<script lang="ts">
import { ShieldCheck, UserRound, CircleUser } from '@lucide/svelte';
import CardGrid from '$lib/components/CardGrid.svelte';
import DocumentHeader from '$lib/components/DocumentHeader.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import PageContent from '$lib/components/PageContent.svelte';
import Link from '$lib/components/Link.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import type { PageData } from './$types';

let { data }: { data: PageData } = $props();
</script>

<PageMeta title="Profile" description="Manage your Glottica account." />
<DocumentHeader header="Your profile" description="Manage your account settings and preferences">
	<UserRound class="size-64" />
</DocumentHeader>

<PageContent>
	<CardGrid>
		<GridCard>
			<div class="flex items-start gap-4">
				<ShieldCheck class="shrink-0 text-muted-foreground mt-0.5 size-5" />
				<div class="flex flex-col gap-1">
					<h2 class="text-lg font-semibold">Security</h2>
					<p class="text-sm text-muted-foreground">Update your password to keep your account secure.</p>
					<div class="mt-2"><Link href="/profile/password/">Change password</Link></div>
				</div>
			</div>
		</GridCard>

		<GridCard class="lg:col-span-2">
			<div class="flex items-start gap-4">
				<CircleUser class="shrink-0 text-muted-foreground mt-0.5 size-5" />
				<div class="flex flex-col gap-4 w-full">
					<h2 class="text-lg font-semibold">Account details</h2>
					<dl class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="flex flex-col gap-1">
							<dt class="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</dt>
							<dd class="text-sm">{data.email}</dd>
						</div>
						<div class="flex flex-col gap-1">
							<dt class="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Username</dt>
							<dd class="text-sm">{data.username}</dd>
						</div>
					</dl>
				</div>
			</div>
		</GridCard>
	</CardGrid>
</PageContent>
