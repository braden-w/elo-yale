<script lang="ts">
	let show = true;
</script>

{#if show}
	<div id="alert-1" class="mb-4 flex rounded-lg bg-blue-100 p-4" role="alert">
		<svg
			aria-hidden="true"
			class="h-5 w-5 flex-shrink-0 text-blue-700"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
				clip-rule="evenodd"
			/>
		</svg>
		<span class="sr-only">Info</span>
		<div class="ml-3 text-sm font-medium text-blue-700">
			Press
			<kbd
				class="rounded-lg border border-slate-400 bg-slate-300 px-2 py-1.5 text-xs font-semibold text-slate-600"
			>
				1
			</kbd>
			or
			<kbd
				class="rounded-lg border border-slate-400 bg-slate-300 px-2 py-1.5 text-xs font-semibold text-slate-600"
			>
				2
			</kbd> to vote using your keyboard.
		</div>
		<button
			type="button"
			class="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-blue-100 p-1.5 text-blue-500 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400"
			data-dismiss-target="#alert-1"
			aria-label="Close"
			on:click={() => (show = false)}
		>
			<span class="sr-only">Close</span>
			<svg
				aria-hidden="true"
				class="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
	</div>
{/if}
