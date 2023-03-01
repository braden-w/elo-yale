<script lang="ts">
	import toast from 'svelte-french-toast';

	import ProgressBar from './ProgressBar.svelte';
	import HorizontalDivider from '$lib/components/HorizontalDivider.svelte';
	import VerticalDivider from '$lib/components/VerticalDivider.svelte';
	import { collegeToImage, type College, type CollegePairs } from '$lib/colleges';
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import { getRandomSarcasticComment } from '$lib/sarcasticComment';
	import { voteToast } from '$lib/voteToast';

	// Number from 0 to 91 (collegePairs.length - 1)
	export let remainingCollegePairs: CollegePairs;
	export let pairNumber = 0;
	const pairNumberCeiling = remainingCollegePairs.length;
	$: [collegeOne, collegeTwo] = remainingCollegePairs[pairNumber];
	$: progress = (pairNumber / pairNumberCeiling) * 100;
	let animate = true;

	// When the number 1 is pressed, the first college is the winner
	// When the number 2 is pressed, the second college is the winner
	function onKeyDown(e: KeyboardEvent) {
		if (e.key === '1') {
			submitVote(collegeOne, collegeTwo);
		} else if (e.key === '2') {
			submitVote(collegeTwo, collegeOne);
		}
	}

	async function submitVote(winner: College, loser: College) {
		console.log('🚀 ~ file: TwoPictureComparison.svelte:17 ~ res ~ const');
		const user_id = $page.data.session?.user.id;
		const res = trpc().upsert.mutate({
			id: `${user_id}-${collegeOne}-${collegeTwo}`,
			winner,
			loser,
			user_id: user_id ?? null
		});
		voteToast({ res, winner, loser });
		pairNumber++;
	}
</script>

<svelte:window on:keydown={onKeyDown} />
<div class="flex h-full w-full flex-col gap-4 sm:flex-row">
	<div class="h-full w-full rounded-2xl">
		<div class="relative overflow-hidden rounded-2xl">
			<img src={collegeToImage[collegeOne]} alt="Picture of {collegeOne}" />
			<button
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 text-center text-white transition hover:bg-opacity-50 hover:opacity-90 {animate
					? 'duration-150 ease-in-out hover:-translate-y-1 hover:scale-105'
					: ''}"
				on:click={() => submitVote(collegeOne, collegeTwo)}
			>
				<p class="text-4xl font-bold tracking-wider text-white">{collegeOne}</p>
			</button>
		</div>
	</div>
	<HorizontalDivider class="sm:hidden" />
	<VerticalDivider class="hidden sm:flex" />
	<div class="h-full w-full rounded-2xl">
		<div class="relative overflow-hidden rounded-2xl">
			<img src={collegeToImage[collegeTwo]} alt="Picture of {collegeTwo}" />
			<button
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 text-center text-white transition hover:bg-opacity-50 hover:opacity-90 {animate
					? 'duration-150 ease-in-out hover:-translate-y-1 hover:scale-105'
					: ''}"
				on:click={() => submitVote(collegeTwo, collegeOne)}
			>
				<p class="text-4xl font-bold tracking-wider text-white">{collegeTwo}</p>
			</button>
		</div>
	</div>
</div>

<ProgressBar {progress} />
