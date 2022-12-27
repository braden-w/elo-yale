<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import type { LayoutData } from './$types';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	export let data: LayoutData;
</script>

<div class="flex h-full w-full flex-col items-center justify-center bg-slate-100">
	<div class="align-center flex w-full justify-center bg-slate-800">
		<h1 class="text-2xl text-slate-100">Elo Yale</h1>
	</div>
	<slot />
</div>
