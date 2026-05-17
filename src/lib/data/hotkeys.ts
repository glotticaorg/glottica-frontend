export type HotkeyConfig = {
	name: string;
	branch: string;
	languageSlug: string | null;
};

export const hotkeys: HotkeyConfig[] = [
	{ name: 'Lithuanian', branch: 'Baltic', languageSlug: null },
	{ name: 'Proto-Indo-European', branch: 'Reconstructed', languageSlug: 'proto-indo-european' },
	{ name: 'Old Church Slavic', branch: 'Slavic', languageSlug: 'old-church-slavonic' },
	{ name: 'Polish', branch: 'Slavic', languageSlug: null },
	{ name: 'Serbo-Croatian', branch: 'Slavic', languageSlug: null },
	{ name: 'Avestan', branch: 'Iranian', languageSlug: 'avestan' },
	{ name: 'Sanskrit', branch: 'Indo-Aryan', languageSlug: 'sanskrit' },
	{ name: 'Greek', branch: 'Hellenic', languageSlug: 'attic-greek' },
	{ name: 'Gothic', branch: 'Germanic', languageSlug: 'gothic' },
	{ name: 'Hittite', branch: 'Anatolian', languageSlug: 'hittite' },
	{ name: 'Latin', branch: 'Italic', languageSlug: 'latin' }
];
