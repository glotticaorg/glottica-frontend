import { describe, expect, it } from 'vitest';
import { LABELS, resolveLabel } from './breadcrumbs';

describe('LABELS', () => {
	it('contains an entry for every known static route segment', () => {
		expect(LABELS['languages']).toBe('Languages');
		expect(LABELS['legal']).toBe('Legal');
		expect(LABELS['responsible-disclosure']).toBe('Responsible Disclosure');
		expect(LABELS['tos']).toBe('Terms of Service');
	});
});

describe('resolveLabel', () => {
	const noParams: Record<string, string> = {};
	const noData: Record<string, unknown> = {};

	it('returns the static label for known segments', () => {
		expect(resolveLabel('languages', noData, noParams)).toBe('Languages');
		expect(resolveLabel('calendar', noData, noParams)).toBe('Calendar');
	});

	it('returns the language name when segment matches the language param', () => {
		const data = { language: { name: 'Classical Latin' } };
		const params = { language: 'latin' };
		expect(resolveLabel('latin', data, params)).toBe('Classical Latin');
	});

	it('returns the text title when segment matches the text param', () => {
		const data = { text: { title: 'The Iliad' } };
		const params = { text: 'iliad' };
		expect(resolveLabel('iliad', data, params)).toBe('The Iliad');
	});

	it('returns the event title when segment matches the event param', () => {
		const data = { event: { title: 'Latin Summer School' } };
		const params = { event: 'latin-summer-school' };
		expect(resolveLabel('latin-summer-school', data, params)).toBe('Latin Summer School');
	});

	it('falls back to the raw segment for unknown segments', () => {
		expect(resolveLabel('unknown-segment', noData, noParams)).toBe('unknown-segment');
	});

	it('falls back to the raw segment when param matches but name is missing', () => {
		const data = { language: {} };
		const params = { language: 'latin' };
		expect(resolveLabel('latin', data, params)).toBe('latin');
	});
});
