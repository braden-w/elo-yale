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

<!-- Put a background image and a card in the center on top of that image with the Title "Elo Yale" and subtitle "Which residential college is the best?" -->
<!-- Put a button that says "Sign in with yale.edu to find out" -->

<div
	class="h-screen w-screen bg-cover bg-center"
	style="background-image: url({collegeToImage['Saybrook']});"
>
	<div class="flex h-full items-center justify-center">
		<div class="rounded-lg bg-white p-6 shadow-lg">
			<div class="align-center flex w-full justify-center bg-slate-800">
				<a href="/"><h1 class="text-2xl tracking-widest text-slate-100">Elo Yale</h1></a>
			</div>
			<h1 class="text-xl tracking-wider text-slate-600">
				Which Residential College is <span class="tracking-widest text-slate-800">Actually</span> the
				Best?
			</h1>
			<button
				on:click={signInWithGoogle}
				class="inline-flex w-full justify-center rounded-xl border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
			>
				<GoogleIcon />
				<span class="tracking-wider">Sign in with yale.edu to find out</span>
			</button>
		</div>
	</div>
</div>

<div class="mx-auto flex h-full flex-col items-center gap-6 p-6 sm:max-w-2xl">
	<img
		src={collegeToImage['Pauli Murray']}
		alt="Elo Yale Splash Page"
		class="h-full rounded-2xl object-cover"
	/>
</div>
