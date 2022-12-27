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
		<div class="relative overflow-hidden rounded-lg">
			<img
				src={colleges[collegeTwo]}
				alt="Picture of {collegeTwo}"
				class="rounded-2xl object-cover"
			/>
			<div
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 text-center text-white hover:bg-opacity-50 hover:opacity-90"
			>
				<p class="text-4xl font-bold tracking-wider text-white">{collegeTwo}</p>
			</div>
		</div>
	</div>
</div>

<ProgressBar progress={50} />
