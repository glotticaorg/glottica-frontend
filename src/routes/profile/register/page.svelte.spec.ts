import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('register page', () => {
	describe('given the page renders with no form data', () => {
		it('then the registration form is visible', async () => {
			render(Page);
			await expect.element(page.getByRole('button', { name: 'Create account' })).toBeInTheDocument();
		});

		it('then the email field is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Email')).toBeInTheDocument();
		});

		it('then the username field is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Username')).toBeInTheDocument();
		});

		it('then the password field is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Password', { exact: true })).toBeInTheDocument();
		});

		it('then the confirm password field is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Confirm password')).toBeInTheDocument();
		});

		it('then a link to log in is present for existing users', async () => {
			render(Page);
			await expect.element(page.getByRole('link', { name: 'Log in' })).toBeInTheDocument();
		});
	});

	describe('given the form was submitted successfully', () => {
		it('then the success message is shown', async () => {
			render(Page, { form: { success: true } });
			await expect.element(page.getByText('Account created!')).toBeInTheDocument();
		});

		it('then the form is no longer visible', async () => {
			render(Page, { form: { success: true } });
			await expect.element(page.getByRole('button', { name: 'Create account' })).not.toBeInTheDocument();
		});
	});

	describe('given the server returned an error', () => {
		it('then the error message is shown', async () => {
			render(Page, { form: { error: 'All fields are required.' } });
			await expect.element(page.getByText('All fields are required.')).toBeInTheDocument();
		});
	});
});
