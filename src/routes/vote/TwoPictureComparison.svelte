<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
	import HorizontalDivider from './HorizontalDivider.svelte';
	import VerticalDivider from './VerticalDivider.svelte';
	import { colleges, type College } from '$lib/colleges';
	export let collegeOne: College = 'Benjamin Franklin';
	export let collegeTwo: College = 'Pauli Murray';
</script>

<div class="flex h-full w-full flex-col gap-4 sm:flex-row">
	<div class="h-full w-full">
		<img
			src={colleges[collegeOne]}
			alt="Picture of {collegeOne}"
			class="rounded-2xl object-cover"
		/>
	</div>
	<HorizontalDivider class="sm:hidden" />
	<VerticalDivider class="hidden sm:flex" />
	<div class="h-full w-full">
		<img
			src={colleges[collegeTwo]}
			alt="Picture of {collegeTwo}"
			class="rounded-2xl object-cover"
		/>
	</div>
</div>

<ProgressBar progress={50} />
