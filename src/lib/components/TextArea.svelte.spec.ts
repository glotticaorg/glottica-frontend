import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TextArea from './TextArea.svelte';

describe('TextArea', () => {
	describe('given name="feedback", label="Feedback"', () => {
		it('then a textarea element is rendered', async () => {
			render(TextArea, { name: 'feedback', label: 'Feedback' });
			await expect.element(page.getByRole('textbox', { name: 'Feedback' })).toBeInTheDocument();
		});
	});
});
