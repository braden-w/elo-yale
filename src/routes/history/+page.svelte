<script lang="ts">
	import TwoPictureComparison from './TwoPictureComparison.svelte';

	import type { PageData } from './$types';
	import { collegeToImage, type College } from '$lib/colleges';
	import VerticalDivider from '$lib/components/VerticalDivider.svelte';
	import toast from 'svelte-french-toast';
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';
	import HorizontalDivider from '$lib/components/HorizontalDivider.svelte';

	export let data: PageData;
	let animate = true;
	let { voteHistory } = data;
	let pairNumber = 0;

	const sortColleges = (a: string, b: string) => [a, b].sort() as [College, College];

	async function submitVote(winner: College, loser: College) {
		const [collegeOne, collegeTwo] = sortColleges(winner, loser);
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
		pairNumber++;
	}
</script>

<!-- {JSON.stringify(voteHistory)} -->
<!-- {pairNumber} -->
<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-4xl">
	<h1 class="text-2xl tracking-wide text-slate-700">My Results</h1>
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
				<VerticalDivider />
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
		</section>
		<HorizontalDivider text="" />
	{/each}
</div>
