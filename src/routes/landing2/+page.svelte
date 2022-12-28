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

<div class="h-full w-full">
	<div class="relative overflow-hidden">
		<img
			src={collegeToImage['Branford']}
			alt="Branford"
			class="h-full max-h-screen w-screen object-cover"
		/>
		<div
			class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40"
		>
			<div class="flex flex-col gap-4 text-white">
				<!-- transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-opacity-50 hover:opacity-90  -->
				<h1 class="max-w-3xl text-5xl tracking-wide">
					Solve the Most Important Question on Campus
				</h1>
				<h2 class="text-2xl">Which Residential College is Actually the Best?</h2>
				<button
					on:click={signInWithGoogle}
					class="peer inline-flex justify-center rounded-lg bg-slate-800 py-2 px-4 shadow-sm hover:bg-gray-700"
				>
					<!-- <GoogleIcon /> -->
					<span class="tracking-wider">Sign in with yale.edu to find out</span>
				</button>
			</div>
		</div>
	</div>
</div>
