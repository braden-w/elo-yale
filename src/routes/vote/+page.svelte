<script lang="ts">
	import TwoPictureComparison from './TwoPictureComparison.svelte';

	import type { PageData } from './$types';
	import KeyboardShortcutAlert from './KeyboardShortcutAlert.svelte';

	export let data: PageData;
	let { remainingCollegePairs } = data;
</script>

{JSON.stringify(remainingCollegePairs)}
<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-4xl">
	<h1 class="text-2xl tracking-wide text-slate-700">Which Residential College is Best?</h1>
	{#if remainingCollegePairs === null || remainingCollegePairs.length === 0}
		<p class="text-xl text-slate-700">You've voted on all the pairs!</p>
	{:else}
		<TwoPictureComparison bind:remainingCollegePairs />
	{/if}
	<div class="hidden sm:block"><KeyboardShortcutAlert /></div>
</div>
