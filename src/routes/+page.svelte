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
					class="inline-flex w-fit justify-center rounded-lg bg-stone-200 text-stone-700 py-3 px-6 shadow-xl hover:shadow-2xl"
					on:mouseover={() => (hover = true)}
					on:mouseout={() => (hover = false)}
					on:focus={() => (hover = true)}
					on:blur={() => (hover = false)}
				>
					<!-- <GoogleIcon /> -->
					<span class="tracking-wider">Sign in with yale.edu to find out</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
</svg>

				</button>
				<button class="inline-flex w-fit items-center justify-center rounded-lg bg-stone-700 px-2 shadow-xl hover:shadow-2xl" 				on:click={() => {
					backgroundCollegeIndex = (backgroundCollegeIndex + 1) % slideColleges.length
				}}>
				<PlaceholderImage />
				</button>
							</div>
			</div>
		</div>
	</div>
</div>
