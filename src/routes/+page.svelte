<script lang="ts">
	import AndSplit from '$lib/components/AndSplit.svelte';
	import HeroLander from '$lib/components/HeroLander.svelte';
	import Stat from '$lib/components/Stat.svelte';
	import StatsList from '$lib/components/StatsList.svelte';
</script>

<HeroLander />
<StatsList>
  <Stat title="Languages" description="Explore all learning materials">7</Stat>
  <Stat title="Universities" description="Leading institutional partners">3</Stat>
  <Stat title="Templates" description="Office, TeX, and Typst support">27</Stat>
  <Stat title="Keybinds" description="For both Windows and Mac">1000+</Stat>
</StatsList>
<div class="bg-base-200 py-8 px-10 lg:px-50">
	<h2 class="text-2xl font-bold mb-6">
		Discover the benefits for free &mdash; forever!
	</h2>
	<AndSplit
		left={{
			title: "For teachers and staff",
			list: [
				"Useful writing tools and keybinds",
				"Easily publish course materials",
				"Support students in learning",
				"Set up templates for students",
			],
		}}
		right={{
			title: "For students",
			list: [
				"Study battle-tested word lists",
				"Learn new scripts effortlessly",
				"Import from and export to Anki",
				"Practice words at the best time",
			],
		}}
	/>
</div>
