<script lang="ts">
import { Languages } from '@lucide/svelte';
import { enhance } from '$app/forms';
import FlexHero from '$lib/components/FlexHero.svelte';
import Input from '$lib/components/Input.svelte';
import Link from '$lib/components/Link.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import { Button } from '$lib/components/ui/button';
import { Card, CardContent } from '$lib/components/ui/card';
import type { ActionData } from './$types';

const { form }: { form: ActionData } = $props();
</script>

<PageMeta title="Register" description="Create a free Glottica account to start learning." />

<FlexHero>
  <div class="relative overflow-hidden w-full">
    <Languages class="size-80 top-70 lg:top-20 left-20 absolute opacity-60 rotate-30 overflow-hidden" />
    <div class="relative flex flex-col lg:flex-row items-center gap-12 px-8 py-16 max-w-4xl mx-auto">
      <Card class="bg-card/90 shadow w-full max-w-sm shrink-0">
        <CardContent>
          {#if form?.success}
            <div class="flex flex-col gap-3 py-4 text-center">
              <p class="text-lg font-semibold">Account created!</p>
              <p class="text-sm text-muted-foreground">You can now <Link href="/">log in</Link> with your new account.</p>
            </div>
          {:else}
            <form method="POST" use:enhance class="flex flex-col gap-4">
              {#if form?.error}
                <p class="text-destructive text-sm">{form.error}</p>
              {/if}
              <Input name="email" type="email" label="Email" required autocomplete="email" />
              <Input name="username" type="text" label="Username" required autocomplete="username" />
              <Input name="password" type="password" label="Password" required minlength={8} maxlength={64} autocomplete="new-password" />
              <Input name="confirm" type="password" label="Confirm password" required minlength={8} maxlength={64} autocomplete="new-password" />
              <Button type="submit" class="w-full mt-2">Create account</Button>
              <p class="text-sm text-center text-muted-foreground">Already have an account? <Link href="/">Log in</Link></p>
            </form>
          {/if}
        </CardContent>
      </Card>

      <div class="flex flex-col gap-4 text-center lg:text-left flex-1">
        <h1 class="text-5xl font-bold">Join for free.</h1>
        <p class="text-muted-foreground">
          Create an account to study battle-tested word lists, practice scripts,
          and sync your progress across devices — all at no cost, forever.
        </p>
      </div>
    </div>
  </div>
</FlexHero>
