import toast from 'svelte-french-toast';
import { getRandomSarcasticComment } from './sarcasticComment';

export function voteToast(res: Promise<null[]>) {
	toast.promise(
		res,
		{
			loading: 'Submitting vote...',
			success: getRandomSarcasticComment(),
			error: 'Failed to submit vote'
		},
		{ position: 'top-right' }
	);
}
