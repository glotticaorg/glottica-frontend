import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email) {
			return fail(400, { error: 'Email is required.' });
		}

		// TODO: wire to backend password reset API
		return { success: true };
	}
};
