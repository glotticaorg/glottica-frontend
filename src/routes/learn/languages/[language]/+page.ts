import { error } from '@sveltejs/kit';
import { languages } from '$lib/data/languages';
import { texts } from '$lib/data/texts';
import { scripts } from '$lib/data/scripts';
import { hotkeys } from '$lib/data/hotkeys';

export const load = ({ params }: { params: { language: string } }) => {
	const lang = languages.find((l) => l.slug === params.language);
	if (!lang) error(404, 'Language not found');

	return {
		language: lang,
		relatedTexts: texts.filter((t) => t.languageSlug === lang.slug),
		relatedScripts: scripts.filter((s) => s.languageSlugs.includes(lang.slug)),
		hotkey: hotkeys.find((h) => h.languageSlug === lang.slug) ?? null
	};
};
