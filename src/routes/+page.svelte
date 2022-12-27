<script lang="ts">
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

<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-4xl">
	<h1 class="text-xl text-slate-700">Which Residential College is Best?</h1>
	<button
		on:click={signInWithGoogle}
		class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
	>
		<GoogleIcon />
		<span>Sign in with Google</span>
	</button>
</div>
