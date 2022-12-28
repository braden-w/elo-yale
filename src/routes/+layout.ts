import { trpc } from '$lib/trpc/client';
import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	// if (!session) {
	// 	throw redirect(303, '/');
	// }
	if (!session) return { session, remainingCollegePairs: [], voteHistory: [] };
	const user_id = session.user.id;

	const remainingCollegePairs = trpc(event).getRemainingVotes.query(user_id);
	const voteHistory = trpc(event).getVotes.query(user_id);
	return { session, remainingCollegePairs, voteHistory };
};
