import { describe, expect, it } from 'vitest';
import { actions } from './+page.server';

function makeRequest(fields: Record<string, string>) {
	const formData = new FormData();
	Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
	return { request: new Request('http://localhost', { method: 'POST', body: formData }) } as any;
}

const valid = { topic: 'features', email: 'user@example.com', feedback: 'Great platform!' };

describe('feedback action', () => {
	describe('given topic is missing', () => {
		it('then returns a 400 failure', async () => {
			const result = await actions.default(makeRequest({ email: valid.email, feedback: valid.feedback }));
			expect(result).toMatchObject({ status: 400, data: { error: 'All fields are required.' } });
		});
	});

	describe('given email is missing', () => {
		it('then returns a 400 failure', async () => {
			const result = await actions.default(makeRequest({ topic: valid.topic, feedback: valid.feedback }));
			expect(result).toMatchObject({ status: 400, data: { error: 'All fields are required.' } });
		});
	});

	describe('given feedback is missing', () => {
		it('then returns a 400 failure', async () => {
			const result = await actions.default(makeRequest({ topic: valid.topic, email: valid.email }));
			expect(result).toMatchObject({ status: 400, data: { error: 'All fields are required.' } });
		});
	});

	describe('given all fields are provided', () => {
		it('then returns success', async () => {
			const result = await actions.default(makeRequest(valid));
			expect(result).toEqual({ success: true });
		});
	});
});
