<script lang="ts">
	import { collegeToImage } from '$lib/colleges';
	import GoogleIcon from '$lib/GoogleIcon.svelte';
	import { supabase } from '$lib/supabaseClient';

	const signInWithGoogle = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${window.location.origin}/vote` }
		});
	};
</script>

<div
	class="h-screen w-screen bg-cover bg-center"
	style="background-image: url({collegeToImage['Branford']});"
>
	<div class="flex h-full items-center justify-center">
		<div class="flex flex-col items-center gap-2 rounded-lg bg-white p-6 shadow-lg">
			<h1 class="text-2xl tracking-widest text-slate-900">Elo Yale</h1>
			<h1 class="text-xl tracking-wider text-slate-600">
				Which Residential College is <span class="tracking-widest text-slate-800">Actually</span> the
				Best?
			</h1>
			<button
				on:click={signInWithGoogle}
				class="inline-flex w-full justify-center rounded-xl border border-gray-300 bg-slate-700 py-2 px-4 text-sm font-medium text-slate-100 shadow-sm hover:bg-gray-50"
			>
				<!-- <GoogleIcon /> -->
				<span class="tracking-wider">Sign in with yale.edu to find out</span>
			</button>
		</div>
	</div>
</div>
