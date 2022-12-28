<script lang="ts">
	import type { PageData } from '../history/leaderboard/$types';

	export let data: PageData;
	const { leaderboard } = data;
</script>

{#each leaderboard as { college, wins, losses, win_rate }}
	{@const total = wins ?? 0 + losses ?? 0}
	<div class="flex flex-col items-center gap-4">
		<h1 class="text-2xl tracking-wide text-slate-700">{college}</h1>
		<p class="text-center text-slate-500">Wins: {wins}</p>
		<p class="text-center text-slate-500">Losses: {total}</p>
		<p class="text-center text-slate-500">Winrate: {win_rate}</p>
	</div>
{/each}
