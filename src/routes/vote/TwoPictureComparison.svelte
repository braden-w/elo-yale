<script lang="ts">
	import toast from 'svelte-french-toast';

	import ProgressBar from './ProgressBar.svelte';
	import HorizontalDivider from '$lib/components/HorizontalDivider.svelte';
	import VerticalDivider from '$lib/components/VerticalDivider.svelte';
	import { allCollegePairs, collegeToImage, type College, type CollegePairs } from '$lib/colleges';
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import { createMutation } from '@tanstack/svelte-query';

	export let remainingCollegePairs: CollegePairs;
	// How many someone has voted on, as a number from 0 to 91 (Can have not voted, or on all 90 pairs)
	export let numberVotedSoFar: number;
	$: [collegeOne, collegeTwo] = remainingCollegePairs[numberVotedSoFar];
	$: numberVoted = allCollegePairs.length - remainingCollegePairs.length + numberVotedSoFar;
	$: numberRemaining = remainingCollegePairs.length - numberVotedSoFar;
	$: progress = (numberVoted / (numberVoted + numberRemaining)) * 100;
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
		const user_id = $page.data.session?.user.id;
		const res = trpc().upsert.mutate({
			id: `${user_id}-${collegeOne}-${collegeTwo}`,
			winner,
			loser,
			user_id: user_id ?? null
		});
		toast.promise(
			res,
			{
				loading: 'Submitting vote...',
				success: 'Vote submitted!',
				error: 'Failed to submit vote'
			},
			{ position: 'top-right' }
		);
	}

	const query = createMutation({
		mutationKey: ['vote', { collegeOne, collegeTwo }],
		mutationFn: submitVote,
		onSuccess: () => {
			numberVotedSoFar++;
		}
	});
</script>

<svelte:window on:keydown={onKeyDown} />
<div class="flex h-full w-full flex-col gap-4 sm:flex-row">
	<div class="h-full w-full">
		<div class="relative overflow-hidden rounded-2xl">
			<img
				src={collegeToImage[collegeOne]}
				alt="Picture of {collegeOne}"
				class="rounded-2xl object-cover"
			/>
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
	<div class="h-full w-full">
		<div class="relative overflow-hidden rounded-2xl">
			<img
				src={collegeToImage[collegeTwo]}
				alt="Picture of {collegeTwo}"
				class="rounded-2xl object-cover"
			/>
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

<div class="flex w-full flex-col items-center">
	<ProgressBar {progress} />
	<p class="text-slate-900">
		{numberVoted} out of {numberVoted + numberRemaining}
	</p>
	<a href="/history"><span class="text-sm text-sky-700 hover:text-sky-900">See history</span></a>
</div>
