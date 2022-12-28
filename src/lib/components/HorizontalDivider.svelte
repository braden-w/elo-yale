<script lang="ts">
	export let text = 'or';
</script>

<div class="relative {$$props.class}">
	<div class="absolute inset-0 flex items-center" aria-hidden="true">
		<div class="w-full border-t border-gray-300" />
	</div>
	<div class="relative flex justify-center">
		<span class="bg-slate-200 px-2 text-sm text-gray-500">{text}</span>
	</div>
</div>
