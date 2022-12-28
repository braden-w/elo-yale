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
		<img src={collegeToImage['Branford']} alt="Branford" class="h-screen w-screen object-fill" />
		<button
			class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40 text-center text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-opacity-50 hover:opacity-90 "
		>
			<div class="flex flex-col items-center">
				<h1 class="text-4xl font-bold tracking-wider text-white">
					Solve the Most Important Question on Campus
				</h1>
				<h2 class="text-4xl font-bold tracking-wider text-white">
					Which Residentil College is Actually the Best?
				</h2>
			</div>
		</button>
	</div>
</div>
