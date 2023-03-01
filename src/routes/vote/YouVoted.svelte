<script lang="ts">
	import type { Database } from '$lib/types/DatabaseDefinitions';

	export let personal_account: Database['public']['Functions']['personal_summary']['Returns'];
</script>

<div class="flex flex-col items-center gap-2">
	<h1 class="text-3xl tracking-wide text-slate-700 sm:text-3xl">You've voted on all the pairs!</h1>
	<h2 class="text-center text-xs tracking-wide text-slate-700">
		Go to
		<a href="/leaderboard">
			<span class="text-sky-700 hover:text-sky-900">leaderboard</span>
		</a>
		or edit
		<a href="/history"><span class="text-sky-700 hover:text-sky-900"> your past votes </span></a> (if
		you dare).
	</h2>
</div>
