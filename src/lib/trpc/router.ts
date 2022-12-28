import { allCollegePairs, colleges } from '$lib/colleges';
import { supabase } from '$lib/supabaseClient';
import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

const row = z.object({
	id: z.string(),
	winner: z.enum(colleges),
	loser: z.enum(colleges),
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
	getRemainingVotes: t.procedure.input(z.string()).query(async ({ input: user_id }) => {
		const { data: userVotes, error } = await supabase.from('votes').select().eq('user_id', user_id);
		if (error) {
			throw new Error(error.message);
		}
		// Return remainingCollegePairs from allCollegePairs that the user has not voted on
		const remainingCollegePairs = allCollegePairs.filter(([collegeOne, collegeTwo]) => {
			return !userVotes.some((vote) => {
				return (
					(vote.winner === collegeOne && vote.loser === collegeTwo) ||
					(vote.winner === collegeTwo && vote.loser === collegeOne)
				);
			});
		});
		if (remainingCollegePairs.length === 0) return null;
		return remainingCollegePairs;
	})
});

export type Router = typeof router;
