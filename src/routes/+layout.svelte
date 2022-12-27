<script lang="ts">
	import { Toaster } from 'svelte-french-toast';

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

<div class="flex min-h-screen w-full flex-col items-center bg-slate-100">
	<Toaster />
	<div class="align-center flex w-full justify-center bg-slate-800">
		<a href="/"><h1 class="text-2xl tracking-widest text-slate-100">Elo Yale</h1></a>
	</div>
	<slot />
</div>
