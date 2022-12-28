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
	let hover = false;
</script>

<div class="h-full w-full">
	<div class="relative overflow-hidden">
		<img
			src={collegeToImage['Branford']}
			alt="Branford"
			class="h-full max-h-screen w-screen object-cover {hover
				? '-translate-y-1 scale-105 bg-opacity-50 opacity-90 transition duration-150 ease-in-out'
				: ''}"
		/>
		<div
			class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40"
		>
			<div class="flex flex-col gap-4 text-white">
				<h1 class="max-w-3xl text-5xl tracking-wide">
					Solve the Most Important Question on Campus
				</h1>
				<h2 class="text-2xl">Which Residential College is Actually the Best?</h2>
				<button
					on:click={signInWithGoogle}
					class="inline-flex w-fit justify-center rounded-lg bg-slate-800 py-2 px-4 shadow-sm hover:bg-gray-700"
					on:mouseover={() => (hover = true)}
					on:mouseout={() => (hover = false)}
					on:focus={() => (hover = true)}
					on:blur={() => (hover = false)}
				>
					<!-- <GoogleIcon /> -->
					<span class="tracking-wider">Sign in with yale.edu to find out</span>
				</button>
			</div>
		</div>
	</div>
</div>
