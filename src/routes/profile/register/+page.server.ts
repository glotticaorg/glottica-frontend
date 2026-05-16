import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const username = data.get('username');
		const password = data.get('password');
		const confirm = data.get('confirm');

		if (!email || !username || !password || !confirm) {
			return fail(400, { error: 'All fields are required.' });
		}

		if (password !== confirm) {
			return fail(400, { error: 'Passwords do not match.' });
		}

		// TODO: wire to backend registration API
		return { success: true };
	}
};
