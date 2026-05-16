import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('password reset page', () => {
	describe('given the page renders with no form data', () => {
		it('then the reset form is visible', async () => {
			render(Page);
			await expect.element(page.getByRole('button', { name: 'Send reset link' })).toBeInTheDocument();
		});

		it('then the email input is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Email')).toBeInTheDocument();
		});

		it('then a link to log in is present for users who remember their password', async () => {
			render(Page);
			await expect.element(page.getByRole('link', { name: 'Log in' })).toBeInTheDocument();
		});
	});

	describe('given the form was submitted successfully', () => {
		it('then the check-your-inbox alert is shown', async () => {
			render(Page, { form: { success: true } });
			await expect.element(page.getByText('Check your inbox')).toBeInTheDocument();
		});

		it('then the form is no longer visible', async () => {
			render(Page, { form: { success: true } });
			await expect.element(page.getByRole('button', { name: 'Send reset link' })).not.toBeInTheDocument();
		});
	});

	describe('given the server returned an error', () => {
		it('then the error message is shown', async () => {
			render(Page, { form: { error: 'Email is required.' } });
			await expect.element(page.getByText('Email is required.')).toBeInTheDocument();
		});
	});
});
