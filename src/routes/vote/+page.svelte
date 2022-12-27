<script lang="ts">
	import TwoPictureComparison from './TwoPictureComparison.svelte';

	import type { PageData } from './$types';
	import { collegePairs } from '$lib/colleges';
	import KeyboardShortcutAlert from './KeyboardShortcutAlert.svelte';

	export let data: PageData;
</script>

<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-4xl">
	<h1 class="text-2xl tracking-wide text-slate-700">Which Residential College is Best?</h1>
	<TwoPictureComparison />
	<div class="hidden sm:block"><KeyboardShortcutAlert /></div>
</div>
