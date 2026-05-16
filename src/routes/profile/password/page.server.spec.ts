import { describe, expect, it } from 'vitest';
import { actions } from './+page.server';

function makeRequest(fields: Record<string, string>) {
	const formData = new FormData();
	Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
	return { request: new Request('http://localhost', { method: 'POST', body: formData }) } as any;
}

describe('password reset action', () => {
	describe('given email is missing', () => {
		it('then returns a 400 failure', async () => {
			const result = await actions.default(makeRequest({}));
			expect(result).toMatchObject({ status: 400, data: { error: 'Email is required.' } });
		});
	});

	describe('given email is provided', () => {
		it('then returns success', async () => {
			const result = await actions.default(makeRequest({ email: 'user@example.com' }));
			expect(result).toEqual({ success: true });
		});
	});
});
