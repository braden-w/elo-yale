<script lang="ts">
	import { collegeToImage, type College } from '$lib/colleges';
	import type { PageData } from '../history/leaderboard/$types';

	export let data: PageData;
	const { leaderboard } = data;
</script>

<div class="flex flex-col items-center gap-6 p-6">
	<!-- <div class="mx-auto flex h-full flex-col items-center gap-4 p-6 sm:max-w-4xl"> -->
	<h1 class="text-3xl tracking-wide text-slate-700">Leaderboard</h1>
	<ul>
		{#each leaderboard as { college, wins, losses, win_rate }, index}
			<!-- {@const total = (wins ?? 0) + (losses ?? 0)} -->
			<li>
				<div class="relative pb-8">
					{#if index !== leaderboard.length - 1}
						<span
							class="absolute inset-x-6 top-4 -ml-px h-full w-0.5 bg-slate-300"
							aria-hidden="true"
						/>
					{/if}
					<div class="relative flex items-center space-x-3 rounded-lg bg-stone-300 p-2">
						<div>
							<span class="flex h-32 w-32 items-center justify-center">
								<img class="rounded-lg object-cover" src={collegeToImage[college]} alt={college} />
							</span>
						</div>
						<div class="flex min-w-0 flex-1 items-stretch justify-between space-x-4 p-4">
							<a href="/college/{college}" class="text-slate-900">
								{college}
							</a>
							<div class="text-right">
								<p class="text-slate-900">
									{win_rate.toFixed(0)}%
								</p>
								<p class="text-xs text-slate-600">{wins} wins, {losses} losses</p>
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
