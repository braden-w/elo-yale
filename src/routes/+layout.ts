import { trpc } from '$lib/trpc/client';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);
	// If the email of the signed in user does not end with @yale.edu, sign them out
	if (session?.user.email?.endsWith('@yale.edu') === false) {
		await supabaseClient.auth.signOut();
		throw redirect(303, '/');
		alert('You must sign in with a Yale email address');
	}
	// if (!session) {
	// 	throw redirect(303, '/');
	// }
	if (!session) return { session, remainingCollegePairs: [], voteHistory: [] };
	const user_id = session.user.id;

	const remainingCollegePairs = trpc(event).getRemainingMatchupsScrambled.query(user_id);
	const voteHistory = trpc(event).getVotes.query(user_id);
	return { session, remainingCollegePairs, voteHistory };
};
