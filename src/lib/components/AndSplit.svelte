<script lang="ts">
import NumberedStep from './NumberedStep.svelte';

type AndSplitListProps = { title: string; list: string[] };
const { left, right }: { left: AndSplitListProps; right: AndSplitListProps } =
	$props();
</script>

<div class="flex w-full flex-col lg:flex-row items-stretch">
  <div class="flex-1 px-8 py-6">
    <h3 class="text-xl font-semibold mb-4">{left.title}</h3>
    <ol class="flex flex-col gap-2">
      {#each left.list as item, i}
        <NumberedStep number={i + 1}>
          <span class="text-sm">{item}</span>
        </NumberedStep>
      {/each}
    </ol>
  </div>

  <!-- Mobile: horizontal rule with AND -->
  <div class="flex lg:hidden items-center py-2">
    <div class="flex-1 h-px bg-foreground/20"></div>
    <span class="text-xs font-bold text-muted-foreground px-3">AND</span>
    <div class="flex-1 h-px bg-foreground/20"></div>
  </div>

  <!-- Desktop: vertical rule with AND centred over it -->
  <div class="hidden lg:flex flex-col items-center self-stretch relative px-6 shrink-0">
    <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-foreground/20"></div>
    <span class="relative z-10 my-auto bg-muted px-2 py-1 text-sm font-bold text-muted-foreground">AND</span>
  </div>

  <div class="flex-1 px-8 py-6">
    <h3 class="text-xl font-semibold mb-4">{right.title}</h3>
    <ol class="flex flex-col gap-2">
      {#each right.list as item, i}
        <NumberedStep number={i + 1}>
          <span class="text-sm">{item}</span>
        </NumberedStep>
      {/each}
    </ol>
  </div>
</div>
