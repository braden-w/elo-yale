<script lang="ts">
	import '../app.postcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex bg-slate-800 align-center justify-center">
	<h1 class="text-2xl text-slate-100">Elo Yale</h1>
</div>

<slot />
