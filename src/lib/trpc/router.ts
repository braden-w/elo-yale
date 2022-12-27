import { colleges } from '$lib/colleges';
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
	get: t.procedure.input(z.string()).query(async (req) => {
		const { data, error } = await supabase.from('votes').select().eq('user_id', req.input);
		if (error) {
			throw new Error(error.message);
		}
		return data;
	})
});

export type Router = typeof router;
