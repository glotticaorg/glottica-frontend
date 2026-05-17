<script lang="ts">
import { UserRound } from '@lucide/svelte';
import { Button } from '$lib/components/ui/button';
import Logo from './Logo.svelte';
import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<header class="flex items-center h-16 px-4 shadow bg-card flex-none">
  <div class="flex-1 overflow-hidden">
    <Breadcrumbs />
  </div>
  <div class="hidden md:flex flex-none">
    <a href="/" aria-label="Home logo">
      <Logo />
    </a>
  </div>
  <div class="flex-1 flex justify-end items-center gap-1">
    <Button variant="ghost" size="icon" href="/profile/" aria-label="Profile">
      <UserRound class="size-6" />
    </Button>
  </div>
</header>
