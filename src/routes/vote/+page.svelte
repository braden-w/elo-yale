<script lang="ts">
	import YouVoted from './YouVoted.svelte';
	import TwoPictureComparison from './TwoPictureComparison.svelte';
	import KeyboardShortcutAlert from './KeyboardShortcutAlert.svelte';
	import type { LayoutData } from '../$types';

	export let data: LayoutData;
	let { remainingCollegePairs, voteHistory, personal_account } = data;
	let numberVotedSoFar = voteHistory.length;
</script>

<!-- {JSON.stringify(remainingCollegePairs)} -->
<!-- {remainingCollegePairs.length} -->
<!-- {numberVotedSoFar} -->
<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-4xl">
	{#if remainingCollegePairs === null || remainingCollegePairs.length === numberVotedSoFar}
		<YouVoted {personal_account} />
	{:else}
		<div class="flex flex-col items-center gap-2">
			<h1 class="text-3xl tracking-wide text-slate-700 sm:text-3xl">
				Which Residential College is Best?
			</h1>
			<h2 class="text-xs tracking-wide text-slate-700">
				Your vote matters – please be honest! Results are displayed after you vote.
			</h2>
		</div>
		<TwoPictureComparison bind:numberVotedSoFar bind:remainingCollegePairs />
	{/if}
	<div class="hidden sm:block"><KeyboardShortcutAlert /></div>
</div>
