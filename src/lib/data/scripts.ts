export type Script = {
	name: string;
	type: string;
	sample: string;
	language: string;
	languageSlug: string | null;
	description: string;
};

export const scripts: Script[] = [
	{
		name: 'Brahmi',
		type: 'Abugida',
		sample: '𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻',
		language: 'Tocharian B',
		languageSlug: 'tocharian-b',
		description:
			'An ancient Indian script used to write the Tocharian B manuscripts from the Tarim Basin.'
	},
	{
		name: 'Cyrillic',
		type: 'Alphabet',
		sample: 'Слово',
		language: 'Old Church Slavonic',
		languageSlug: 'old-church-slavonic',
		description:
			'Derived from Greek uncial script, used in the earliest Old Church Slavonic liturgical texts.'
	},
	{
		name: 'Glagolitic',
		type: 'Alphabet',
		sample: 'ⰔⰎⰂⰅⰀ',
		language: 'Old Church Slavonic',
		languageSlug: 'old-church-slavonic',
		description:
			'The oldest known Slavic alphabet, created by Saint Cyril in the 9th century for Bible translation.'
	},
	{
		name: 'Ogham',
		type: 'Alphabet',
		sample: '᚛ᚑᚌᚐᚋ᚜',
		language: 'Old Irish',
		languageSlug: null,
		description:
			'An early medieval alphabet used to write the early Irish language, carved on standing stones.'
	},
	{
		name: 'Greek',
		type: 'Alphabet',
		sample: 'Ἑλληνικά',
		language: 'Ancient Greek',
		languageSlug: 'attic-greek',
		description:
			'The writing system of ancient and modern Greek, ancestor of Latin, Cyrillic, and Coptic scripts.'
	},
	{
		name: 'Cuneiform',
		type: 'Logosyllabic',
		sample: '𒀭𒂗𒍪',
		language: 'Hittite',
		languageSlug: 'hittite',
		description:
			'One of the earliest writing systems, pressed into clay tablets and used across the ancient Near East.'
	},
	{
		name: 'Gothic',
		type: 'Alphabet',
		sample: '𐌲𐌿𐌸𐌹𐍃𐌺',
		language: 'Gothic',
		languageSlug: 'gothic',
		description:
			'Created by Bishop Wulfila in the 4th century to translate the Bible into the Gothic language.'
	}
];
