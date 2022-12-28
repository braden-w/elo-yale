import { trpc } from '$lib/trpc/client';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: PageLoad = (async (event) => {
	const { session } = await getSupabase(event);
	if (!session) {
		throw redirect(303, '/');
	}
	const user_id = session.user.id;

	console.log('🚀 ~ file: +page.ts:14 ~ constload:PageLoad= ~ user_id', user_id);
	const remainingCollegePairs = await trpc(event).getRemainingVotes.query(user_id);
	console.log(
		'🚀 ~ file: +page.ts:15 ~ constload:PageLoad= ~ remainingCollegePairs',
		remainingCollegePairs
	);
	return { remainingCollegePairs };
}) satisfies PageLoad;
