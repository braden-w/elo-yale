import toast from 'svelte-french-toast';
import { getRandomSarcasticComment } from './sarcasticComment';
import type { College } from './colleges';

export function voteToast({
	res,
	winner,
	loser
}: {
	res: Promise<null[]>;
	winner: College;
	loser: College;
}) {
	toast.promise(
		res,
		{
			loading: 'Submitting vote...',
			success: getRandomSarcasticComment({ winner, loser }),
			error: 'Failed to submit vote'
		},
		{ position: 'top-right' }
	);
}
