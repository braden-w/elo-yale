import { ALL_COLLEGE_PAIRS, COLLEGES } from '$lib/colleges';
import { supabase } from '$lib/supabaseClient';
import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

const row = z.object({
	id: z.string(),
	winner: z.enum(COLLEGES),
	loser: z.enum(COLLEGES),
	user_id: z.string().nullable()
});

export const router = t.router({
	upsert: t.procedure.input(row).mutation(async (req) => {
		const { data, error } = await supabase.from('votes').upsert(req.input);
		if (error) {
			throw new Error(error.message);
		}
		return data;
	}),
	getVotes: t.procedure.input(z.string()).query(async (req) => {
		const { data, error } = await supabase.from('votes').select().eq('user_id', req.input);
		if (error) {
			throw new Error(error.message);
		}
		return data;
	}),
	getRemainingMatchups: t.procedure.input(z.string()).query(async ({ input: user_id }) => {
		const { data: userVotes, error } = await supabase.from('votes').select().eq('user_id', user_id);
		if (error) {
			throw new Error(error.message);
		}
		// Return remainingCollegePairs from allCollegePairs that the user has not voted on
		const remainingCollegePairs = ALL_COLLEGE_PAIRS.filter(([collegeOne, collegeTwo]) => {
			return !userVotes.some((vote) => {
				return (
					(vote.winner === collegeOne && vote.loser === collegeTwo) ||
					(vote.winner === collegeTwo && vote.loser === collegeOne)
				);
			});
		});
		if (remainingCollegePairs.length === 0) return null;
		return remainingCollegePairs;
	}),
	getRemainingMatchupsScrambled: t.procedure.input(z.string()).query(async ({ input: user_id }) => {
		// Call getRemainingMatchups
		const { data: userVotes, error } = await supabase.from('votes').select().eq('user_id', user_id);
		if (error) {
			throw new Error(error.message);
		}
		// Return remainingCollegePairs from allCollegePairs that the user has not voted on
		const remainingCollegePairs = ALL_COLLEGE_PAIRS.filter(([collegeOne, collegeTwo]) => {
			return !userVotes.some((vote) => {
				return (
					(vote.winner === collegeOne && vote.loser === collegeTwo) ||
					(vote.winner === collegeTwo && vote.loser === collegeOne)
				);
			});
		});
		if (remainingCollegePairs.length === 0) return null;
		return remainingCollegePairs.sort(() => Math.random() - 0.5);
	}),
	getLeaderboard: t.procedure.query(async () => {
		const { data, error } = await supabase.from('leaderboard').select();
		if (error) {
			throw new Error(error.message);
		}
		// Row type is typeof data but all properties are nonullable
		type NonNullableProperties<T> = {
			[P in keyof T]: NonNullable<T[P]>;
		};

		return (data as NonNullableProperties<typeof data[0]>[]).sort(
			(a, b) => b.win_rate - a.win_rate
		);
	})
});

export type Router = typeof router;
