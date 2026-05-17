import { describe, expect, it } from 'vitest';
import { actions } from './+page.server';

function makeRequest(fields: Record<string, string>) {
	const formData = new FormData();
	Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
	return { request: new Request('http://localhost', { method: 'POST', body: formData }) } as any;
}

describe('login action', () => {
	describe('given email is missing', () => {
		it('then returns a 400 failure with an error message', async () => {
			const result = await actions.default(makeRequest({ password: 'secret123' }));
			expect(result).toMatchObject({ status: 400, data: { error: 'Email and password are required.' } });
		});
	});

	describe('given password is missing', () => {
		it('then returns a 400 failure with an error message', async () => {
			const result = await actions.default(makeRequest({ email: 'user@example.com' }));
			expect(result).toMatchObject({ status: 400, data: { error: 'Email and password are required.' } });
		});
	});

	describe('given both email and password are provided', () => {
		it('then returns success', async () => {
			const result = await actions.default(makeRequest({ email: 'user@example.com', password: 'secret123' }));
			expect(result).toEqual({ success: true });
		});
	});
});
