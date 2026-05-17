import { error } from '@sveltejs/kit';
import { texts } from '$lib/data/texts';
import { languages } from '$lib/data/languages';
import { scripts } from '$lib/data/scripts';

export const load = ({ params }: { params: { text: string } }) => {
	const text = texts.find((t) => t.slug === params.text);
	if (!text) error(404, 'Text not found');

	const language = languages.find((l) => l.slug === text.languageSlug) ?? null;
	const relatedScripts = scripts.filter((s) => s.languageSlugs.includes(text.languageSlug));

	return { text, language, relatedScripts };
};
