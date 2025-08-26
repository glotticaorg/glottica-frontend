<script>
	import HintButton from "$lib/components/HintButton.svelte";
</script>

<div class="hero flex-1">
	<div class="hero-content text-center">
		<div class="card bg-base-300 min-w-64 md:min-w-128">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-3xl">Horatio</h2>
				<div class="card-actions my-3">
					<div class="join join-vertical md:join-horizontal px-4">
						<button class="btn btn-accent join-item">Horatius</button>
						<button class="btn btn-accent join-item">garden</button>
						<button class="btn btn-accent join-item">flowers</button>
						<button class="btn btn-accent join-item">Henrietta</button>
					</div>
				</div>
				<div class="card-actions">
					<HintButton />
				</div>
			</div>
		</div>
	</div>
</div>
