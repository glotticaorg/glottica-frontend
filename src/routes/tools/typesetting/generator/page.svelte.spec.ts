import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('template generator page', () => {
	describe('given the page renders', () => {
		it('then the Content type fieldset is present', async () => {
			render(Page);
			await expect.element(page.getByRole('group', { name: 'Content type' })).toBeInTheDocument();
		});

		it('then the Application fieldset is present', async () => {
			render(Page);
			await expect.element(page.getByRole('group', { name: 'Application' })).toBeInTheDocument();
		});

		it('then the Citation style fieldset is present', async () => {
			render(Page);
			await expect.element(page.getByRole('group', { name: 'Citation style' })).toBeInTheDocument();
		});

		it('then the Paper, Syllabus, and Slides content type options are present', async () => {
			render(Page);
			await expect.element(page.getByRole('radio', { name: 'Paper' })).toBeInTheDocument();
			await expect.element(page.getByRole('radio', { name: 'Syllabus' })).toBeInTheDocument();
			await expect.element(page.getByRole('radio', { name: 'Slides' })).toBeInTheDocument();
		});

		it('then the TeX and Typst application options are present', async () => {
			render(Page);
			await expect.element(page.getByRole('radio', { name: 'TeX' })).toBeInTheDocument();
			await expect.element(page.getByRole('radio', { name: 'Typst' })).toBeInTheDocument();
		});

		it('then the Unified, APA, and MLA citation style options are present', async () => {
			render(Page);
			await expect.element(page.getByRole('radio', { name: 'Unified' })).toBeInTheDocument();
			await expect.element(page.getByRole('radio', { name: 'APA' })).toBeInTheDocument();
			await expect.element(page.getByRole('radio', { name: 'MLA' })).toBeInTheDocument();
		});

		it('then the Generate template button is present', async () => {
			render(Page);
			await expect.element(page.getByRole('button', { name: 'Generate template' })).toBeInTheDocument();
		});
	});

	describe('given the theme color text input is updated', () => {
		it('then the color picker reflects the new value', async () => {
			render(Page);
			const textInput = page.getByLabelText('Theme color');
			const colorPicker = document.querySelector('input[type="color"]') as HTMLInputElement;

			expect(colorPicker.value).toBe('#3b82f6');
			await textInput.fill('#ff0000');
			expect(colorPicker.value).toBe('#ff0000');
		});
	});
});
