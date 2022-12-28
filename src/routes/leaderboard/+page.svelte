<script lang="ts">
	import {collegeToImage,  type College } from '$lib/colleges';
	import type { PageData } from '../history/leaderboard/$types';

	export let data: PageData;
	const { leaderboard } = data;
</script>

<div class="flow-root">
	<ul class="-mb-8">
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
							class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-300"
							aria-hidden="true"
						/>
					{/if}
					<div class="relative flex space-x-3">
						<div>
							<span class="flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white">
								<img class="h-5 w-5 rounded-full" src={collegeToImage[ college ]} alt="" />
							</span>
						</div>
						<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
							<div>
								<p class="text-sm text-gray-500">
									{college}{' '}
									<a href={college} class="font-medium text-gray-900">
										{college}
									</a>
								</p>
							</div>
							<div class="whitespace-nowrap text-right text-sm text-gray-500">Hello world</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
