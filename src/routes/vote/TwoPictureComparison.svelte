<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';

	import type { PageData } from './$types';
	import HorizontalDivider from './HorizontalDivider.svelte';
	import VerticalDivider from './VerticalDivider.svelte';

	export let data: PageData;
</script>

<div class="flex flex-col sm:flex-row gap-4">
	<img
		src="/colleges/Rustic/DALL·E 2022-12-26 10.18.46 - extremely detailed artstation high quality concept art image of a rustic autumn view of a Yale Residential College_ 8K UHD , digital art, Archdaily.png"
		alt=""
		class="rounded-2xl"
	/>
	<HorizontalDivider class="sm:hidden" />
	<VerticalDivider class="hidden sm:flex" />
	<img
		src="/colleges/Rustic/DALL·E 2022-12-26 10.18.46 - extremely detailed artstation high quality concept art image of a rustic autumn view of a Yale Residential College_ 8K UHD , digital art, Archdaily.png"
		alt=""
		class="rounded-2xl"
	/>
</div>

<ProgressBar progress={50} />
