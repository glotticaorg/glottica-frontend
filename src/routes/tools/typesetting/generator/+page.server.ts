import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const template = data.get('template');
		const application = data.get('application');
		const citations = data.get('citations');

		if (!template || !application || !citations) {
			return fail(400, {
				error: 'Please select a content type, application, and citation style.'
			});
		}

		// TODO: generate and return the template file
		return { success: true };
	}
};
