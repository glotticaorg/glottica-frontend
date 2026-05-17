import { error } from '@sveltejs/kit';
import { scripts } from '$lib/data/scripts';
import { languages } from '$lib/data/languages';
import { hotkeys } from '$lib/data/hotkeys';

export const load = ({ params }: { params: { script: string } }) => {
	const script = scripts.find((s) => s.slug === params.script);
	if (!script) error(404, 'Script not found');

	const relatedLanguages = languages.filter((l) => script.languageSlugs.includes(l.slug));
	const relatedHotkeys = hotkeys.filter(
		(h) => h.languageSlug && script.languageSlugs.includes(h.languageSlug)
	);

	return { script, relatedLanguages, relatedHotkeys };
};
