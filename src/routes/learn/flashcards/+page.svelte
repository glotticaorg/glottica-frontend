<script>
import { Send } from '@lucide/svelte';
import AccentJoinButton from '$lib/components/AccentJoinButton.svelte';
import AccentJoinSearch from '$lib/components/AccentJoinSearch.svelte';
import CardActions from '$lib/components/CardActions.svelte';
import CardTitle from '$lib/components/CardTitle.svelte';
import CardWide from '$lib/components/CardWide.svelte';
import CenteredCardBody from '$lib/components/CenteredCardBody.svelte';
import CenteredHero from '$lib/components/CenteredHero.svelte';
import HintButton from '$lib/components/HintButton.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import ResponsiveJoin from '$lib/components/ResponsiveJoin.svelte';
import WideJoin from '$lib/components/WideJoin.svelte';
</script>

<PageMeta title="Flashcards" description="Practice Indo-European vocabulary with interactive flashcard exercises." />
<CenteredHero>
	<CardWide>
		<CenteredCardBody>
			<CardTitle>Horatio</CardTitle>
			<CardActions>
				<ResponsiveJoin>
					<AccentJoinButton>Horatius</AccentJoinButton>
					<AccentJoinButton>garden</AccentJoinButton>
					<AccentJoinButton>flowers</AccentJoinButton>
					<AccentJoinButton>Henrietta</AccentJoinButton>
				</ResponsiveJoin>
				<WideJoin>
					<AccentJoinSearch placeholder="Answer" />
					<AccentJoinButton ariaLabel="Send answer">
						<Send class="size-6 opacity-50" />
					</AccentJoinButton>
				</WideJoin>
			</CardActions>
			<CardActions>
				<HintButton />
			</CardActions>
		</CenteredCardBody>
	</CardWide>
</CenteredHero>
