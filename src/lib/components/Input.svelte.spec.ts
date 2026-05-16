import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Input from './Input.svelte';

describe('Input', () => {
	describe('given name="email", type="email", label="Email address"', () => {
		it('then an input of type email is rendered', async () => {
			render(Input, { name: 'email', type: 'email', label: 'Email address' });
			await expect.element(page.getByLabelText('Email address')).toHaveAttribute('type', 'email');
		});
	});

	describe('given the required prop is set', () => {
		it('then the input carries the required attribute', async () => {
			render(Input, { name: 'email', type: 'email', label: 'Email address', required: true });
			await expect.element(page.getByLabelText('Email address')).toHaveAttribute('required');
		});
	});
});
