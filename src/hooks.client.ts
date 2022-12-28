import '$lib/supabaseClient';
// Auth Guard
import { supabase } from '$lib/supabaseClient';
// If the email of the signed in user does not end with @yale.edu, sign them out
const { data } = await supabase.auth.getSession();
if (data.session?.user.email?.endsWith('@yale.edu') === false) {
	await supabase.auth.signOut();
	alert('You must sign in with a Yale email address');
}
