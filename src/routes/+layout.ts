import { trpc } from '$lib/trpc/client';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	if (!session) {
		throw redirect(303, '/');
	}
	const user_id = session.user.id;

	const remainingCollegePairs = await trpc(event).getRemainingVotes.query(user_id);
	return { session, remainingCollegePairs };
};
