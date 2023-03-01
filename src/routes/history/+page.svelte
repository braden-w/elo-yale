<script lang="ts">
	import TwoPictureComparison from './TwoPictureComparison.svelte';

	import type { PageData } from './$types';
	import { collegeToImage, type College } from '$lib/colleges';
	import VerticalDivider from '$lib/components/VerticalDivider.svelte';
	import toast from 'svelte-french-toast';
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';
	import { getRandomSarcasticComment } from '$lib/sarcasticComment';

	export let data: PageData;
	let animate = true;
	let { voteHistory } = data;

	const sortColleges = (a: string, b: string) => [a, b].sort() as [College, College];

	const modifyVoteHistory = (id: string, winner: College, loser: College) => {
		// Replace the entry with the same id
		const index = voteHistory.findIndex((vote) => vote.id === id);
		if (index === -1) return;

		voteHistory[index] = {
			...voteHistory[index],
			winner,
			loser
		};
	};
	async function submitVote(winner: College, loser: College) {
		const [collegeOne, collegeTwo] = sortColleges(winner, loser);
		const user_id = $page.data.session?.user.id;
		const id = `${user_id}-${collegeOne}-${collegeTwo}`;
		const res = trpc().upsert.mutate({
			id,
			winner,
			loser,
			user_id: user_id ?? null
		});
		toast.promise(
			res,
			{
				loading: 'Submitting vote...',
				success: getRandomSarcasticComment(),
				error: 'Failed to submit vote'
			},
			{ position: 'top-right' }
		);
		modifyVoteHistory(id, winner, loser);
	}
</script>

<!-- {JSON.stringify(voteHistory)} -->
<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-4xl">
	<h1 class="text-3xl tracking-wide text-slate-700">My Past Votes</h1>
	{#if voteHistory.length === 0}
		<p class="text-center text-slate-500">You haven't voted on any matchups yet!</p>
		<p class="text-center text-slate-500">
			Go to the <a href="/vote" class="text-slate-600 underline">vote page</a> to vote on matchups.
		</p>
	{/if}
	{#each voteHistory as { winner, loser }}
		{@const [collegeOne, collegeTwo] = sortColleges(winner, loser)}
		<section class="flex flex-col items-center gap-6">
			<div class="relative w-full">
				<div class="absolute inset-0 flex items-center" aria-hidden="true">
					<div class="w-full border-t border-gray-300" />
				</div>
				<div class="relative flex justify-center">
					<h2 class="bg-slate-200 px-3 text-xl font-medium tracking-wide text-slate-500">
						{collegeOne} vs {collegeTwo}
					</h2>
				</div>
			</div>

			<div class="flex h-full w-full gap-4">
				<div
					class="h-full w-full rounded-2xl ring-stone-400"
					class:ring-8={collegeOne === winner}
					class:opacity-70={collegeOne === loser}
				>
					<div class="relative overflow-hidden rounded-2xl">
						<img src={collegeToImage[collegeOne]} alt="Picture of {collegeOne}" />
						<button
							class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 text-center text-white transition hover:bg-opacity-50 hover:opacity-90 {animate
								? 'duration-150 ease-in-out hover:-translate-y-1 hover:scale-105'
								: ''}"
							on:click={() => submitVote(collegeOne, collegeTwo)}
						>
							<p class="text-lg font-bold tracking-wider text-white sm:text-4xl">{collegeOne}</p>
						</button>
					</div>
				</div>
				<VerticalDivider />
				<div
					class="h-full w-full rounded-2xl ring-stone-400"
					class:ring-8={collegeTwo === winner}
					class:opacity-70={collegeTwo === loser}
				>
					<div class="relative overflow-hidden rounded-2xl">
						<img src={collegeToImage[collegeTwo]} alt="Picture of {collegeTwo}" />
						<button
							class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 text-center text-white transition hover:bg-opacity-50 hover:opacity-90 {animate
								? 'duration-150 ease-in-out hover:-translate-y-1 hover:scale-105'
								: ''}"
							on:click={() => submitVote(collegeTwo, collegeOne)}
						>
							<p class="text-lg font-bold tracking-wider text-white sm:text-4xl">{collegeTwo}</p>
						</button>
					</div>
				</div>
			</div>
		</section>
	{/each}
</div>
