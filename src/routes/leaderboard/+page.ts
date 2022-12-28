import { trpc } from '$lib/trpc/client';
import type { PageLoad } from '../history/leaderboard/$types';

export const load = (async (event) => {
	return { leaderboard: trpc(event).getLeaderboard.query() };
}) satisfies PageLoad;
