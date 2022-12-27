<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
	import HorizontalDivider from './HorizontalDivider.svelte';
	import VerticalDivider from './VerticalDivider.svelte';
	import { collegeToImage, type College } from '$lib/colleges';
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	export let collegeOne: College = 'Benjamin Franklin';
	export let collegeTwo: College = 'Pauli Murray';
	let animate = true;

	async function submitVote(winnerAndLoser: { winner: College; loser: College }) {
		console.log('🚀 ~ file: TwoPictureComparison.svelte:17 ~ res ~ const');
		const res = await trpc().insert.mutate({
			...winnerAndLoser,
			user_id: $page.data.session?.user.id ?? null
		});
		console.log('🚀 ~ file: TwoPictureComparison.svelte:17 ~ res ~ res', res);
	}
</script>

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
				on:click={() => submitVote({ winner: collegeOne, loser: collegeTwo })}
			>
				<p class="text-4xl font-bold tracking-wider text-white">{collegeOne}</p>
			</button>
		</div>
	</div>
	<HorizontalDivider class="sm:hidden" />
	<VerticalDivider class="hidden sm:flex" />
	<div class="h-full w-full">
		<button class="relative overflow-hidden rounded-2xl" on:click={() => submitVote}>
			<img
				src={collegeToImage[collegeTwo]}
				alt="Picture of {collegeTwo}"
				class="rounded-2xl object-cover"
			/>
			<button
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 text-center text-white transition hover:bg-opacity-50 hover:opacity-90 {animate
					? 'duration-150 ease-in-out hover:-translate-y-1 hover:scale-105'
					: ''}"
				on:click={() => submitVote({ winner: collegeTwo, loser: collegeOne })}
			>
				<p class="text-4xl font-bold tracking-wider text-white">{collegeTwo}</p>
			</button>
		</button>
	</div>
</div>

<ProgressBar progress={50} />
