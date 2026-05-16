import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const topic = data.get('topic');
		const email = data.get('email');
		const feedback = data.get('feedback');

		if (!topic || !email || !feedback) {
			return fail(400, { error: 'All fields are required.' });
		}

		// TODO: wire to backend feedback API
		return { success: true };
	}
};
