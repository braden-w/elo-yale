<script lang="ts">
	import { collegeToImage, type College } from '$lib/colleges';
	import type { PageData } from '../history/leaderboard/$types';

	export let data: PageData;
	const { leaderboard } = data;
</script>

<div class="flex flex-col items-center gap-6 p-6">
	<!-- <div class="mx-auto flex h-full flex-col items-center gap-4 p-6 sm:max-w-4xl"> -->
	<h1 class="text-2xl tracking-wide text-slate-700">Leaderboard</h1>
	<ul>
		{#each leaderboard as { college, wins, losses, win_rate }, index}
			{@const total = (wins ?? 0) + (losses ?? 0)}
			<!-- <div class="flex flex-col items-center gap-4">
		<h1 class="text-2xl tracking-wide text-slate-700">{college}</h1>
		<p class="text-center text-slate-500">Wins: {wins}</p>

		<p class="text-center text-slate-500">Losses: {total}</p>
		<p class="text-center text-slate-500">Winrate: {win_rate}</p>
	</div> -->
			<li>
				<div class="relative pb-8">
					{#if index !== leaderboard.length - 1}
						<span
							class="absolute inset-x-6 top-4 -ml-px h-full w-0.5 bg-slate-300"
							aria-hidden="true"
						/>
					{/if}
					<div class="relative flex items-center space-x-3">
						<div>
							<span class="flex h-12 w-12 items-center justify-center">
								<img class="rounded-lg object-cover" src={collegeToImage[college]} alt={college} />
							</span>
						</div>
						<div class="flex min-w-0 flex-1 items-center justify-between space-x-4 pt-1.5">
							<a href="/college/{college}" class="font-medium text-slate-900">
								{college}
							</a>
							<p class="text-center text-slate-500">
								<span class="text-slate-800">
									{win_rate.toFixed(0)}%
								</span>
								{wins} wins, {losses} losses
							</p>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
