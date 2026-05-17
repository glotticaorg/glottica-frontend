export type Language = {
	slug: string;
	name: string;
	branch: string;
	sample: string;
	romanized: string;
	description: string;
};

export const languages: Language[] = [
	{
		slug: 'attic-greek',
		name: 'Attic Greek',
		branch: 'Hellenic',
		sample: 'λόγος',
		romanized: 'lógos',
		description:
			'The classical language of Athens, Homer, and the New Testament. Foundation of Western philosophy and science.'
	},
	{
		slug: 'latin',
		name: 'Latin',
		branch: 'Italic',
		sample: 'lingua',
		romanized: 'lingua',
		description:
			'The prestige language of Rome, ancestor of the Romance languages and the Catholic liturgical tradition.'
	},
	{
		slug: 'sanskrit',
		name: 'Sanskrit',
		branch: 'Indo-Aryan',
		sample: 'भाषा',
		romanized: 'bhāṣā',
		description:
			'The sacred language of the Vedas and classical Indian literature, preserving archaic Indo-European features.'
	},
	{
		slug: 'old-norse',
		name: 'Old Norse',
		branch: 'Germanic',
		sample: 'rúnar',
		romanized: 'rúnar',
		description:
			'Language of the Vikings and the Eddas, ancestor of the modern Scandinavian languages.'
	},
	{
		slug: 'old-english',
		name: 'Old English',
		branch: 'Germanic',
		sample: 'worold',
		romanized: 'worold',
		description:
			'The language of Beowulf and Alfred the Great, spoken in England from the 5th to 11th centuries.'
	},
	{
		slug: 'gothic',
		name: 'Gothic',
		branch: 'Germanic',
		sample: '𐌲𐌿𐌸',
		romanized: 'guþ',
		description:
			"The earliest attested Germanic language, preserved in Wulfila's 4th-century Bible translation."
	},
	{
		slug: 'hittite',
		name: 'Hittite',
		branch: 'Anatolian',
		sample: '𒅴𒂷',
		romanized: 'gišTUKUL',
		description:
			'The oldest recorded Indo-European language, written in cuneiform in the ancient Near East.'
	},
	{
		slug: 'old-church-slavonic',
		name: 'Old Church Slavonic',
		branch: 'Slavic',
		sample: 'слово',
		romanized: 'slovo',
		description:
			'The first literary Slavic language, created by Saints Cyril and Methodius in the 9th century.'
	},
	{
		slug: 'avestan',
		name: 'Avestan',
		branch: 'Iranian',
		sample: '𐬀𐬵𐬎𐬥𐬀',
		romanized: 'ahuna',
		description:
			'The liturgical language of Zoroastrianism, closely related to Vedic Sanskrit.'
	},
	{
		slug: 'old-persian',
		name: 'Old Persian',
		branch: 'Iranian',
		sample: '𐎧𐏁𐎠𐎹𐎰𐎡𐎹',
		romanized: 'xšāyaθiya',
		description:
			'The language of Darius and Xerxes, inscribed in cuneiform at Persepolis and Behistun.'
	},
	{
		slug: 'tocharian-b',
		name: 'Tocharian B',
		branch: 'Tocharian',
		sample: 'śaumo',
		romanized: 'śaumo',
		description:
			'An extinct branch of Indo-European discovered in manuscripts from the Tarim Basin of Central Asia.'
	},
	{
		slug: 'proto-indo-european',
		name: 'Proto-Indo-European',
		branch: 'Reconstructed',
		sample: '*wódr̥',
		romanized: '*wódr̥',
		description:
			'The reconstructed ancestral language from which all Indo-European languages descend.'
	}
];
