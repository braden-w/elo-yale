<script lang="ts">
	import TwoPictureComparison from './TwoPictureComparison.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col p-4 gap-2">
	<h1 class="text-slate-500">Which Residential College is Best?</h1>
	<TwoPictureComparison />
</div>
