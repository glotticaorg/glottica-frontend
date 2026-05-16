import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('feedback page', () => {
	describe('given the page renders with no form data', () => {
		it('then the feedback form is visible', async () => {
			render(Page);
			await expect.element(page.getByRole('button', { name: 'Send feedback' })).toBeInTheDocument();
		});

		it('then the topic select is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Type')).toBeInTheDocument();
		});

		it('then the email input is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Email')).toBeInTheDocument();
		});

		it('then the feedback textarea is rendered', async () => {
			render(Page);
			await expect.element(page.getByLabelText('Feedback')).toBeInTheDocument();
		});
	});

	describe('given the form was submitted successfully', () => {
		it('then the success alert is shown', async () => {
			render(Page, { form: { success: true } });
			await expect.element(page.getByText('Thank you')).toBeInTheDocument();
		});

		it('then the form is no longer visible', async () => {
			render(Page, { form: { success: true } });
			await expect.element(page.getByRole('button', { name: 'Send feedback' })).not.toBeInTheDocument();
		});
	});

	describe('given the server returned a validation error', () => {
		it('then the error message is shown', async () => {
			render(Page, { form: { error: 'All fields are required.' } });
			await expect.element(page.getByText('All fields are required.')).toBeInTheDocument();
		});
	});
});
