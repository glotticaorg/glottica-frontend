export type Text = {
	slug: string;
	title: string;
	author: string;
	period: string;
	genre: string;
	language: string;
	languageSlug: string;
	preservation: string;
	region: string;
	annotator?: string;
};

export const texts: Text[] = [
	{ slug: 'iliad', title: 'Iliad', author: 'Homer', period: '~750 BCE', genre: 'Epic', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece', annotator: 'Richmond Lattimore' },
	{ slug: 'odyssey', title: 'Odyssey', author: 'Homer', period: '~725 BCE', genre: 'Epic', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece', annotator: 'Emily Wilson' },
	{ slug: 'republic', title: 'Republic', author: 'Plato', period: '~375 BCE', genre: 'Philosophy', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece', annotator: 'Benjamin Jowett' },
	{ slug: 'oedipus-rex', title: 'Oedipus Rex', author: 'Sophocles', period: '~429 BCE', genre: 'Tragedy', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece' },
	{ slug: 'aeneid', title: 'Aeneid', author: 'Virgil', period: '~19 BCE', genre: 'Epic', language: 'Latin', languageSlug: 'latin', preservation: 'Manuscript', region: 'Rome', annotator: 'Robert Fagles' },
	{ slug: 'de-bello-gallico', title: 'De Bello Gallico', author: 'Julius Caesar', period: '~50 BCE', genre: 'History', language: 'Latin', languageSlug: 'latin', preservation: 'Manuscript', region: 'Rome' },
	{ slug: 'de-rerum-natura', title: 'De Rerum Natura', author: 'Lucretius', period: '~55 BCE', genre: 'Philosophy', language: 'Latin', languageSlug: 'latin', preservation: 'Manuscript', region: 'Rome' },
	{ slug: 'rigveda', title: 'Rigveda', author: 'Various', period: '~1500 BCE', genre: 'Religious', language: 'Sanskrit', languageSlug: 'sanskrit', preservation: 'Oral tradition', region: 'Indian Subcontinent', annotator: 'Ralph T.H. Griffith' },
	{ slug: 'mahabharata', title: 'Mahabharata', author: 'Vyasa', period: '~400 BCE', genre: 'Epic', language: 'Sanskrit', languageSlug: 'sanskrit', preservation: 'Manuscript', region: 'Indian Subcontinent' },
	{ slug: 'voluspa', title: 'Völuspá', author: 'Unknown', period: '~1000 CE', genre: 'Eddic Poetry', language: 'Old Norse', languageSlug: 'old-norse', preservation: 'Manuscript', region: 'Iceland' },
	{ slug: 'havamal', title: 'Hávamál', author: 'Unknown', period: '~1200 CE', genre: 'Eddic Poetry', language: 'Old Norse', languageSlug: 'old-norse', preservation: 'Manuscript', region: 'Iceland' },
	{ slug: 'prose-edda', title: 'Prose Edda', author: 'Snorri Sturluson', period: '~1220 CE', genre: 'Mythology', language: 'Old Norse', languageSlug: 'old-norse', preservation: 'Manuscript', region: 'Iceland' },
	{ slug: 'beowulf', title: 'Beowulf', author: 'Unknown', period: '~700 CE', genre: 'Epic', language: 'Old English', languageSlug: 'old-english', preservation: 'Manuscript', region: 'England', annotator: 'Seamus Heaney' },
	{ slug: 'the-wanderer', title: 'The Wanderer', author: 'Unknown', period: '~975 CE', genre: 'Elegy', language: 'Old English', languageSlug: 'old-english', preservation: 'Manuscript', region: 'England' },
	{ slug: 'anglo-saxon-chronicle', title: 'Anglo-Saxon Chronicle', author: 'Various', period: '~890 CE', genre: 'History', language: 'Old English', languageSlug: 'old-english', preservation: 'Manuscript', region: 'England' },
	{ slug: 'codex-argenteus', title: 'Codex Argenteus', author: 'Wulfila', period: '~350 CE', genre: 'Scripture', language: 'Gothic', languageSlug: 'gothic', preservation: 'Manuscript', region: 'Northern Italy' },
	{ slug: 'telepinu-myth', title: 'Telepinu Myth', author: 'Unknown', period: '~1500 BCE', genre: 'Mythology', language: 'Hittite', languageSlug: 'hittite', preservation: 'Clay tablet', region: 'Anatolia' },
	{ slug: 'hittite-laws', title: 'Hittite Laws', author: 'Unknown', period: '~1650 BCE', genre: 'Legal', language: 'Hittite', languageSlug: 'hittite', preservation: 'Clay tablet', region: 'Anatolia' },
	{ slug: 'codex-suprasliensis', title: 'Codex Suprasliensis', author: 'Unknown', period: '~1000 CE', genre: 'Hagiography', language: 'Old Church Slavonic', languageSlug: 'old-church-slavonic', preservation: 'Manuscript', region: 'Balkans' },
	{ slug: 'ostromir-gospels', title: 'Ostromir Gospels', author: 'Deacon Gregory', period: '1056 CE', genre: 'Scripture', language: 'Old Church Slavonic', languageSlug: 'old-church-slavonic', preservation: 'Manuscript', region: 'Novgorod' },
	{ slug: 'gathas', title: 'Gathas', author: 'Zarathustra', period: '~1000 BCE', genre: 'Religious', language: 'Avestan', languageSlug: 'avestan', preservation: 'Oral tradition', region: 'Central Asia' },
	{ slug: 'vendidad', title: 'Vendidad', author: 'Unknown', period: '~500 BCE', genre: 'Religious', language: 'Avestan', languageSlug: 'avestan', preservation: 'Manuscript', region: 'Persia' },
	{ slug: 'behistun-inscription', title: 'Behistun Inscription', author: 'Darius I', period: '~520 BCE', genre: 'Royal Inscription', language: 'Old Persian', languageSlug: 'old-persian', preservation: 'Rock inscription', region: 'Persia', annotator: 'Henry Rawlinson' },
	{ slug: 'persepolis-fortification-tablets', title: 'Persepolis Fortification Tablets', author: 'Various', period: '~500 BCE', genre: 'Administrative', language: 'Old Persian', languageSlug: 'old-persian', preservation: 'Clay tablet', region: 'Persia' },
];
