<script lang="ts">
  type AndSplitListProps = { title: string, list: string[] }
  let { left, right }: { left: AndSplitListProps, right: AndSplitListProps } = $props()
</script>

<div class="flex w-full flex-col lg:flex-row">
	<div
		class="card shadow bg-base-300 rounded-box grid min-h-32 flex-1 px-8 py-6"
	>
		<h3 class="text-xl mb-2">{left.title}</h3>
		<ul class="steps steps-vertical">
      {#each left.list as item}
        <li class="step step-primary">{item}</li>
      {/each}
		</ul>
	</div>
	<div class="divider lg:divider-horizontal lg:m-8">AND</div>
	<div
		class="card shadow bg-base-300 rounded-box grid min-h-32 flex-1 grow px-8 py-6"
	>
		<h3 class="text-xl mb-2">{right.title}</h3>
		<ul class="steps steps-vertical">
      {#each right.list as item}
        <li class="step step-primary">{item}</li>
      {/each}
		</ul>
	</div>
</div>

<style>
	.step {
		text-align: left;
		justify-items: normal;
		align-items: center;
	}
</style>
