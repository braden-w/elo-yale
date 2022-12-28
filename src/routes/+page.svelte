<script lang="ts">
	import { colleges, collegeToImage, type College } from '$lib/colleges';
	import GoogleIcon from '$lib/GoogleIcon.svelte';
	import PlaceholderImage from '$lib/PlaceholderImage.svelte';

	import { supabase } from '$lib/supabaseClient';

	const signInWithGoogle = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${window.location.origin}/vote` }
		});
	};
	let hover = false;
	const slideColleges: College[] = ['Pauli Murray', 'Saybrook', 'Grace Hopper', 'Branford', 'Benjamin Franklin', 'Jonathan Edwards']
	let backgroundCollegeIndex = 0
	$: backgroundCollege = slideColleges[backgroundCollegeIndex];
</script>

<div class="h-full w-full">
	<div class="relative overflow-hidden">
		<img
			src={collegeToImage[backgroundCollege]}
			alt={backgroundCollege}
			class="h-full max-h-screen w-screen object-cover transition duration-150 ease-in-out {hover
				? '-translate-y-1 scale-105'
				: ''}"
		/>
		<div
			class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black"
			class:bg-opacity-40={hover}
			class:bg-opacity-50={!hover}
		>
			<div class="flex flex-col gap-4 text-white">
				<h1 class="max-w-3xl text-5xl tracking-wide ">
Which Residential College is <span class="tracking-widest">Actually</span> the Best?
				</h1>
				<h2 class="text-2xl ">					Solve the Most Question Important on Campus<span class="from-current to-white text-transparent bg-clip-text bg-gradient-to-l">...</span></h2>
				<div class="flex gap-4">
				<button
					on:click={signInWithGoogle}
					class="inline-flex w-fit justify-center rounded-lg bg-stone-700 py-2 px-4 shadow-xl hover:shadow-2xl"
					on:mouseover={() => (hover = true)}
					on:mouseout={() => (hover = false)}
					on:focus={() => (hover = true)}
					on:blur={() => (hover = false)}
				>
					<!-- <GoogleIcon /> -->
					<span class="tracking-wider">Sign in with yale.edu to find out</span>
				</button>
				<button class="inline-flex w-fit justify-center rounded-lg bg-stone-700 px-2 shadow-xl hover:shadow-2xl" 				on:click={() => {
					backgroundCollegeIndex = (backgroundCollegeIndex + 1) % slideColleges.length
				}}>
				<PlaceholderImage />
				</button>
							</div>
			</div>
		</div>
	</div>
</div>
