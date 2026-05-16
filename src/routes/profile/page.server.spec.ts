import { describe, expect, it } from 'vitest';
import { actions } from './+page.server';

function makeRequest(fields: Record<string, string>) {
	const formData = new FormData();
	Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
	return { request: new Request('http://localhost', { method: 'POST', body: formData }) } as any;
}

describe('profile update action', () => {
	describe('given email is missing', () => {
		it('then returns a 400 failure', async () => {
			const result = await actions.update(makeRequest({ username: 'learner' }));
			expect(result).toMatchObject({ status: 400, data: { error: 'Email and username are required.' } });
		});
	});

	describe('given username is missing', () => {
		it('then returns a 400 failure', async () => {
			const result = await actions.update(makeRequest({ email: 'user@example.com' }));
			expect(result).toMatchObject({ status: 400, data: { error: 'Email and username are required.' } });
		});
	});

	describe('given both email and username are provided', () => {
		it('then returns success', async () => {
			const result = await actions.update(makeRequest({ email: 'user@example.com', username: 'learner' }));
			expect(result).toEqual({ success: true });
		});
	});
});
