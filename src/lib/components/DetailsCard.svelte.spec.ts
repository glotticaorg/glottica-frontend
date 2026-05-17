import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import DetailsCard from './DetailsCard.svelte';

describe('DetailsCard', () => {
	describe('given left and right snippets', () => {
		it('renders left column content', async () => {
			const left = createRawSnippet(() => ({
				render: () => `<span>Left content</span>`,
				setup: () => {},
			}));
			const right = createRawSnippet(() => ({
				render: () => `<span>Right content</span>`,
				setup: () => {},
			}));
			render(DetailsCard, { left, right });
			await expect.element(page.getByText('Left content')).toBeInTheDocument();
		});

		it('renders right column content', async () => {
			const left = createRawSnippet(() => ({
				render: () => `<span>Left content</span>`,
				setup: () => {},
			}));
			const right = createRawSnippet(() => ({
				render: () => `<span>Right content</span>`,
				setup: () => {},
			}));
			render(DetailsCard, { left, right });
			await expect.element(page.getByText('Right content')).toBeInTheDocument();
		});
	});
});
