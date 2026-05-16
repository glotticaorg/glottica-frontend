import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

const data = { email: 'user@example.com', username: 'learner' } as any;

describe('profile page', () => {
	describe('given the page renders with account data', () => {
		it('then the account email is displayed', async () => {
			render(Page, { data });
			await expect.element(page.getByText('user@example.com')).toBeInTheDocument();
		});

		it('then the account username is displayed', async () => {
			render(Page, { data });
			await expect.element(page.getByText('learner')).toBeInTheDocument();
		});

		it('then the change password link is present', async () => {
			render(Page, { data });
			await expect.element(page.getByRole('link', { name: 'Change password' })).toBeInTheDocument();
		});
	});
});
