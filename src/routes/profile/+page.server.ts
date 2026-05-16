import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// TODO: fetch from backend using session/auth token
	return {
		email: 'atour@glottica.org',
		username: 'atour'
	};
};

export const actions: Actions = {
	update: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const username = data.get('username');

		if (!email || !username) {
			return fail(400, { error: 'Email and username are required.' });
		}

		// TODO: wire to backend profile update API
		return { success: true };
	}
};
