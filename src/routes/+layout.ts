import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { reloadEntriesStore } from '$lib/entries/store';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	await reloadEntriesStore();
	return { session };
};
