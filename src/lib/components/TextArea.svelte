<script lang="ts">
  let { label, name }: { label: string, name: string } = $props()
</script>

<label class="floating-label w-full">
	<span>{label}</span>
	<textarea rows="10" class="textarea w-full" placeholder={label} name={name}></textarea>
</label>
