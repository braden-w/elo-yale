<script lang="ts">
	// Type for number between 0 and 100
	export let progress: number;
</script>

<div class="h-1.5 w-full rounded-full bg-slate-500">
	<div class="h-1.5 rounded-full bg-slate-700" style="width: {progress}%" />
</div>
