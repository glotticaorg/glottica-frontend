import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import { Globe } from '@lucide/svelte';
import DetailItem from './DetailItem.svelte';

describe('DetailItem', () => {
	describe('given label="Region" and a text value', () => {
		it('renders the label as a dt', async () => {
			const children = createRawSnippet(() => ({
				render: () => `<span>Mediterranean</span>`,
				setup: () => {},
			}));
			render(DetailItem, { label: 'Region', icon: Globe, children });
			await expect.element(page.getByRole('term')).toHaveTextContent('Region');
		});

		it('renders the value as a dd', async () => {
			const children = createRawSnippet(() => ({
				render: () => `<span>Mediterranean</span>`,
				setup: () => {},
			}));
			render(DetailItem, { label: 'Region', icon: Globe, children });
			await expect.element(page.getByRole('definition')).toHaveTextContent('Mediterranean');
		});
	});
});
