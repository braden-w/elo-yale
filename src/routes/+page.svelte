<script lang="ts">
	import { collegeToImage } from '$lib/colleges';
	import GoogleIcon from '$lib/GoogleIcon.svelte';
	import { supabase } from '$lib/supabaseClient';

	import type { PageData } from './$types';
	export let data: PageData;
	const signInWithGoogle = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${window.location.origin}/vote` }
		});
	};
</script>

<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-2xl">
	<img
		src={collegeToImage['Pauli Murray']}
		alt="Elo Yale Splash Page"
		class="h-full rounded-2xl object-cover"
	/>
	<h1 class="text-xl tracking-wider text-slate-600">
		Which Residential College is <span class="tracking-widest text-slate-800">Actually</span> the Best?
	</h1>
	<button
		on:click={signInWithGoogle}
		class="inline-flex w-full justify-center rounded-xl border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
	>
		<GoogleIcon />
		<span class="tracking-wider">Sign in with yale.edu to find out</span>
	</button>
</div>
