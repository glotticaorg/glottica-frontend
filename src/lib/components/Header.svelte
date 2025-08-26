<script lang="ts">
	import HomeIcon from './icons/HomeIcon.svelte';
	import ProfileIcon from './icons/ProfileIcon.svelte';
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="navbar shadow bg-base-100 flex-none">
	<div class="navbar-start">
		<a class="btn btn-ghost btn-circle" aria-label="Home" href="/">
			<HomeIcon />
		</a>
	</div>
	<div class="navbar-center">
		<a href="/" aria-label="Home logo">
			<Logo />
		</a>
	</div>
	<div class="navbar-end">
		<ThemeToggle />
		<a class="btn btn-ghost btn-circle" aria-label="Profile" href="/profile/">
			<ProfileIcon />
		</a>
	</div>
</div>
