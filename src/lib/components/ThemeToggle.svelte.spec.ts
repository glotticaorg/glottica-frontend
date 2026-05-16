import { page } from 'vitest/browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ThemeToggle from './ThemeToggle.svelte';
import { theme } from '$lib/stores/theme.svelte';

beforeEach(() => {
	document.documentElement.classList.toggle('dark', theme.darkMode);
	localStorage.removeItem('glottica-theme');
});

describe('ThemeToggle', () => {
	describe('given the toggle button is clicked', () => {
		it('then the dark class on the html element is toggled', async () => {
			render(ThemeToggle);
			const wasDark = theme.darkMode;

			const button = document.querySelector('[aria-label="Visual theme toggle"]') as HTMLElement;
			button.click();

			expect(document.documentElement.classList.contains('dark')).toBe(!wasDark);

			button.click();
			expect(document.documentElement.classList.contains('dark')).toBe(wasDark);
		});

		it('then localStorage is updated to reflect the new theme', async () => {
			render(ThemeToggle);
			const wasDark = theme.darkMode;

			const button = document.querySelector('[aria-label="Visual theme toggle"]') as HTMLElement;
			button.click();

			expect(localStorage.getItem('glottica-theme')).toBe(!wasDark ? 'dark' : 'light');
		});
	});
});
