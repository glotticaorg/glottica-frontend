import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { createRawSnippet } from 'svelte';
import { render } from 'vitest-browser-svelte';
import Select from './Select.svelte';

const oneOption = createRawSnippet(() => ({
	render: () => `<option value="a">Option A</option>`,
}));

describe('Select', () => {
	describe('given name="topic", label="Topic", with one option', () => {
		it('then the slotted option is rendered inside the select', async () => {
			render(Select, { name: 'topic', label: 'Topic', children: oneOption });
			await expect.element(page.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
		});
	});
});
