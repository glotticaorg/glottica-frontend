import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('flashcards page', () => {
	describe('given the page renders', () => {
		it('then the card heading "Horatio" is visible', async () => {
			render(Page);
			await expect.element(page.getByText('Horatio')).toBeInTheDocument();
		});

		it('then the four answer choice buttons are present', async () => {
			render(Page);
			await expect.element(page.getByRole('button', { name: 'Horatius' })).toBeInTheDocument();
			await expect.element(page.getByRole('button', { name: 'garden' })).toBeInTheDocument();
			await expect.element(page.getByRole('button', { name: 'flowers' })).toBeInTheDocument();
			await expect.element(page.getByRole('button', { name: 'Henrietta' })).toBeInTheDocument();
		});

		it('then the hint button is present', async () => {
			render(Page);
			await expect.element(page.getByRole('button', { name: 'Get a hint' })).toBeInTheDocument();
		});
	});
});
