<script lang="ts">
import type { HTMLInputAttributes } from 'svelte/elements';
import { Label } from '$lib/components/ui/label';
import { cn } from '$lib/utils';

const {
  name,
  label,
  class: className,
  ...attrs
}: { name: string; label: string } & HTMLInputAttributes = $props();
</script>

<div class="flex flex-col gap-1.5">
  <Label for={name}>{label}</Label>
  <input
    {name}
    id={name}
    placeholder={label}
    class={cn(
      "border-input focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border bg-card px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className
    )}
    {...attrs}
  />
</div>
