import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('home page', () => {
	describe('given the page renders', () => {
		it('then an h1 heading is present', async () => {
			render(Page);
			await expect.element(page.getByRole('heading', { level: 1 })).toBeInTheDocument();
		});

		it('then the email input is present', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Email')).toBeInTheDocument();
		});

		it('then the password input is present', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Password')).toBeInTheDocument();
		});

		it('then the Login button is present', async () => {
			render(Page);
			await expect.element(page.getByRole('button', { name: 'Login' })).toBeInTheDocument();
		});

		it('then a link to the password reset page is present', async () => {
			render(Page);
			await expect.element(page.getByRole('link', { name: 'Forgot password?' })).toBeInTheDocument();
		});

		it('then a link to the registration page is present', async () => {
			render(Page);
			await expect.element(page.getByRole('link', { name: 'create an account' })).toBeInTheDocument();
		});
	});
});
