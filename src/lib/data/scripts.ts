export type Script = {
	slug: string;
	name: string;
	type: string;
	sample: string;
	languageSlugs: string[];
	description: string;
};

export const scripts: Script[] = [
	{
		slug: 'brahmi',
		name: 'Brahmi',
		type: 'Abugida',
		sample: '𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻',
		languageSlugs: ['tocharian-b'],
		description:
			'An ancient Indian script used to write the Tocharian B manuscripts from the Tarim Basin.'
	},
	{
		slug: 'cyrillic',
		name: 'Cyrillic',
		type: 'Alphabet',
		sample: 'Слово',
		languageSlugs: ['old-church-slavonic'],
		description:
			'Derived from Greek uncial script, used in the earliest Old Church Slavonic liturgical texts.'
	},
	{
		slug: 'glagolitic',
		name: 'Glagolitic',
		type: 'Alphabet',
		sample: 'ⰔⰎⰂⰅⰀ',
		languageSlugs: ['old-church-slavonic'],
		description:
			'The oldest known Slavic alphabet, created by Saint Cyril in the 9th century for Bible translation.'
	},
	{
		slug: 'ogham',
		name: 'Ogham',
		type: 'Alphabet',
		sample: '᚛ᚑᚌᚐᚋ᚜',
		languageSlugs: [],
		description:
			'An early medieval alphabet used to write the early Irish language, carved on standing stones.'
	},
	{
		slug: 'greek',
		name: 'Greek',
		type: 'Alphabet',
		sample: 'Ἑλληνικά',
		languageSlugs: ['attic-greek'],
		description:
			'The writing system of ancient and modern Greek, ancestor of Latin, Cyrillic, and Coptic scripts.'
	},
	{
		slug: 'cuneiform',
		name: 'Cuneiform',
		type: 'Logosyllabic',
		sample: '𒀭𒂗𒍪',
		languageSlugs: ['hittite', 'old-persian'],
		description:
			'One of the earliest writing systems, pressed into clay tablets and used across the ancient Near East.'
	},
	{
		slug: 'gothic',
		name: 'Gothic',
		type: 'Alphabet',
		sample: '𐌲𐌿𐌸𐌹𐍃𐌺',
		languageSlugs: ['gothic'],
		description:
			'Created by Bishop Wulfila in the 4th century to translate the Bible into the Gothic language.'
	},
	{
		slug: 'latin',
		name: 'Latin',
		type: 'Alphabet',
		sample: 'Roma',
		languageSlugs: ['latin', 'old-english', 'old-norse'],
		description:
			'The alphabet of ancient Rome, descended from Etruscan and Greek scripts. Ancestor of virtually all modern European writing systems and the most widely used script in the world today.'
	}
];
