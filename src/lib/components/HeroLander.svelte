<script lang="ts">
import { enhance } from '$app/forms';
import { Button } from '$lib/components/ui/button';
import { Card, CardContent } from '$lib/components/ui/card';
import { Input } from '$lib/components/ui/input';
import { Label } from '$lib/components/ui/label';
import { Languages } from '@lucide/svelte';
import FlexHero from './FlexHero.svelte';
import Link from './Link.svelte';
import PageHeader from './PageHeader.svelte';
</script>

<FlexHero>
  <div class="relative overflow-hidden w-full">
    <Languages class="size-80 top-70 lg:top-20 left-20 absolute opacity-60 rotate-30 overflow-hidden" />
    <div class="relative flex flex-col lg:flex-row items-center gap-12 px-8 py-16 max-w-4xl mx-auto">
      <div class="flex flex-col gap-4 text-center lg:text-left flex-1 lg:order-last">
        <PageHeader>Login now!</PageHeader>
        <p>
          Or <Link href="/profile/register">create an account</Link> for
          free to start learning
        </p>
      </div>

      <Card class="bg-card/90 shadow w-full max-w-sm shrink-0 lg:order-first">
        <CardContent>
          <form method="POST" use:enhance>
            <fieldset class="flex flex-col gap-4">
              <div class="flex flex-col gap-1.5">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  autocomplete="email"
                  required
                />
              </div>
              <div class="flex flex-col gap-1.5">
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  minlength={8}
                  maxlength={64}
                  required
                />
              </div>
              <div>
                <Link href="/profile/password/">Forgot password?</Link>
              </div>
              <Button type="submit" class="w-full mt-2">Login</Button>
            </fieldset>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</FlexHero>
