<script lang="ts">
	import Divider from './Divider.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col gap-4">
	<img src="https://picsum.photos/200/300" alt="" class="rounded-2xl" />
	<Divider />
	<img src="https://picsum.photos/200/300" alt="" class="rounded-2xl" />
</div>
