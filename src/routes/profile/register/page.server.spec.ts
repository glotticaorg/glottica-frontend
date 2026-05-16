import { describe, expect, it } from 'vitest';
import { actions } from './+page.server';

function makeRequest(fields: Record<string, string>) {
	const formData = new FormData();
	Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
	return { request: new Request('http://localhost', { method: 'POST', body: formData }) } as any;
}

const valid = {
	email: 'user@example.com',
	username: 'learner',
	password: 'password123',
	confirm: 'password123',
};

describe('register action', () => {
	describe('given a required field is missing', () => {
		it('then returns a 400 failure with a required-fields error', async () => {
			const { email: _omit, ...withoutEmail } = valid;
			const result = await actions.default(makeRequest(withoutEmail));
			expect(result).toMatchObject({ status: 400, data: { error: 'All fields are required.' } });
		});
	});

	describe('given password and confirm do not match', () => {
		it('then returns a 400 failure with a mismatch error', async () => {
			const result = await actions.default(makeRequest({ ...valid, confirm: 'different123' }));
			expect(result).toMatchObject({ status: 400, data: { error: 'Passwords do not match.' } });
		});
	});

	describe('given all fields are valid and passwords match', () => {
		it('then returns success', async () => {
			const result = await actions.default(makeRequest(valid));
			expect(result).toEqual({ success: true });
		});
	});
});
