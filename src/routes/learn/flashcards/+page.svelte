<script>
	import AccentJoinButton from '$lib/components/AccentJoinButton.svelte';
	import AccentJoinSearch from '$lib/components/AccentJoinSearch.svelte';
	import CenteredCardBody from '$lib/components/CenteredCardBody.svelte';
	import CardActions from '$lib/components/CardActions.svelte';
	import CardTitle from '$lib/components/CardTitle.svelte';
	import CardWide from '$lib/components/CardWide.svelte';
	import HintButton from '$lib/components/HintButton.svelte';
	import SendIcon from '$lib/components/icons/SendIcon.svelte';
	import ResponsiveJoin from '$lib/components/ResponsiveJoin.svelte';
	import WideJoin from '$lib/components/WideJoin.svelte';
	import CenteredHero from '$lib/components/CenteredHero.svelte';
</script>

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
						<SendIcon />
					</AccentJoinButton>
				</WideJoin>
			</CardActions>
			<CardActions>
				<HintButton />
			</CardActions>
		</CenteredCardBody>
	</CardWide>
</CenteredHero>
