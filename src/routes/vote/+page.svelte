<script lang="ts">
	import TwoPictureComparison from './TwoPictureComparison.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto flex flex-col items-center h-full gap-6 p-6 sm:max-w-4xl">
	<h1 class="text-xl text-slate-700">Which Residential College is Best?</h1>
	<TwoPictureComparison />
</div>
