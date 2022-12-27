<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';

	import type { PageData } from './$types';
	import HorizontalDivider from './HorizontalDivider.svelte';
	import VerticalDivider from './VerticalDivider.svelte';
	import { colleges } from '$lib/colleges';

	export let data: PageData;
</script>

<div class="align-center flex h-full w-full flex-col justify-center gap-4 sm:flex-row">
	<div class="h-full w-full">
		<img src={colleges['Benjamin Franklin']} alt="" class="rounded-2xl object-cover" />
	</div>
	<HorizontalDivider class="sm:hidden" />
	<VerticalDivider class="hidden sm:flex" />
	<div class="h-full w-full">
		<img src={colleges['Pauli Murray']} alt="" class="rounded-2xl object-cover" />
	</div>
</div>

<ProgressBar progress={50} />
