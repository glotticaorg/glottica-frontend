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
	tags: string[];
};

export const texts: Text[] = [
	{ slug: 'iliad', title: 'Iliad', author: 'Homer', period: '~750 BCE', genre: 'Epic', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece', annotator: 'Richmond Lattimore', tags: ['War', 'Heroes', 'Troy', 'Gods', 'Oral Tradition'] },
	{ slug: 'odyssey', title: 'Odyssey', author: 'Homer', period: '~725 BCE', genre: 'Epic', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece', annotator: 'Emily Wilson', tags: ['Journey', 'Sea', 'Homecoming', 'Gods', 'Oral Tradition'] },
	{ slug: 'republic', title: 'Republic', author: 'Plato', period: '~375 BCE', genre: 'Philosophy', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece', annotator: 'Benjamin Jowett', tags: ['Justice', 'Politics', 'Allegory', 'Dialectic'] },
	{ slug: 'oedipus-rex', title: 'Oedipus Rex', author: 'Sophocles', period: '~429 BCE', genre: 'Tragedy', language: 'Attic Greek', languageSlug: 'attic-greek', preservation: 'Manuscript', region: 'Greece', tags: ['Fate', 'Family', 'Hubris', 'Oracle'] },
	{ slug: 'aeneid', title: 'Aeneid', author: 'Virgil', period: '~19 BCE', genre: 'Epic', language: 'Latin', languageSlug: 'latin', preservation: 'Manuscript', region: 'Rome', annotator: 'Robert Fagles', tags: ['Founding Myth', 'War', 'Prophecy', 'Gods'] },
	{ slug: 'de-bello-gallico', title: 'De Bello Gallico', author: 'Julius Caesar', period: '~50 BCE', genre: 'History', language: 'Latin', languageSlug: 'latin', preservation: 'Manuscript', region: 'Rome', tags: ['War', 'Gaul', 'Military', 'Ethnography'] },
	{ slug: 'de-rerum-natura', title: 'De Rerum Natura', author: 'Lucretius', period: '~55 BCE', genre: 'Philosophy', language: 'Latin', languageSlug: 'latin', preservation: 'Manuscript', region: 'Rome', tags: ['Epicureanism', 'Cosmology', 'Atoms', 'Death'] },
	{ slug: 'rigveda', title: 'Rigveda', author: 'Various', period: '~1500 BCE', genre: 'Religious', language: 'Sanskrit', languageSlug: 'sanskrit', preservation: 'Oral tradition', region: 'Indian Subcontinent', annotator: 'Ralph T.H. Griffith', tags: ['Hymns', 'Ritual', 'Cosmology', 'Fire', 'Oral Tradition'] },
	{ slug: 'mahabharata', title: 'Mahabharata', author: 'Vyasa', period: '~400 BCE', genre: 'Epic', language: 'Sanskrit', languageSlug: 'sanskrit', preservation: 'Manuscript', region: 'Indian Subcontinent', tags: ['War', 'Dharma', 'Heroes', 'Genealogy'] },
	{ slug: 'voluspa', title: 'Völuspá', author: 'Unknown', period: '~1000 CE', genre: 'Eddic Poetry', language: 'Old Norse', languageSlug: 'old-norse', preservation: 'Manuscript', region: 'Iceland', tags: ['Cosmology', 'Prophecy', 'Creation', 'Ragnarök'] },
	{ slug: 'havamal', title: 'Hávamál', author: 'Unknown', period: '~1200 CE', genre: 'Eddic Poetry', language: 'Old Norse', languageSlug: 'old-norse', preservation: 'Manuscript', region: 'Iceland', tags: ['Wisdom', 'Ethics', 'Runic Lore', 'Odin'] },
	{ slug: 'prose-edda', title: 'Prose Edda', author: 'Snorri Sturluson', period: '~1220 CE', genre: 'Mythology', language: 'Old Norse', languageSlug: 'old-norse', preservation: 'Manuscript', region: 'Iceland', tags: ['Gods', 'Cosmology', 'Skalds', 'Dwarves'] },
	{ slug: 'beowulf', title: 'Beowulf', author: 'Unknown', period: '~700 CE', genre: 'Epic', language: 'Old English', languageSlug: 'old-english', preservation: 'Manuscript', region: 'England', annotator: 'Seamus Heaney', tags: ['Heroes', 'Monsters', 'Royalty', 'Mead-Hall'] },
	{ slug: 'the-wanderer', title: 'The Wanderer', author: 'Unknown', period: '~975 CE', genre: 'Elegy', language: 'Old English', languageSlug: 'old-english', preservation: 'Manuscript', region: 'England', tags: ['Exile', 'Grief', 'Winter', 'Wisdom'] },
	{ slug: 'anglo-saxon-chronicle', title: 'Anglo-Saxon Chronicle', author: 'Various', period: '~890 CE', genre: 'History', language: 'Old English', languageSlug: 'old-english', preservation: 'Manuscript', region: 'England', tags: ['Kings', 'Battles', 'Church', 'Vikings'] },
	{ slug: 'codex-argenteus', title: 'Codex Argenteus', author: 'Wulfila', period: '~350 CE', genre: 'Scripture', language: 'Gothic', languageSlug: 'gothic', preservation: 'Manuscript', region: 'Northern Italy', tags: ['Bible', 'Christianity', 'Translation', 'Illuminated'] },
	{ slug: 'telepinu-myth', title: 'Telepinu Myth', author: 'Unknown', period: '~1500 BCE', genre: 'Mythology', language: 'Hittite', languageSlug: 'hittite', preservation: 'Clay tablet', region: 'Anatolia', tags: ['Fertility', 'Ritual', 'Storm God', 'Disappearance'] },
	{ slug: 'hittite-laws', title: 'Hittite Laws', author: 'Unknown', period: '~1650 BCE', genre: 'Legal', language: 'Hittite', languageSlug: 'hittite', preservation: 'Clay tablet', region: 'Anatolia', tags: ['Society', 'Property', 'Punishment', 'Trade'] },
	{ slug: 'codex-suprasliensis', title: 'Codex Suprasliensis', author: 'Unknown', period: '~1000 CE', genre: 'Hagiography', language: 'Old Church Slavonic', languageSlug: 'old-church-slavonic', preservation: 'Manuscript', region: 'Balkans', tags: ['Saints', 'Christianity', 'Liturgy'] },
	{ slug: 'ostromir-gospels', title: 'Ostromir Gospels', author: 'Deacon Gregory', period: '1056 CE', genre: 'Scripture', language: 'Old Church Slavonic', languageSlug: 'old-church-slavonic', preservation: 'Manuscript', region: 'Novgorod', tags: ['Bible', 'Christianity', 'Illuminated', 'Liturgy'] },
	{ slug: 'gathas', title: 'Gathas', author: 'Zarathustra', period: '~1000 BCE', genre: 'Religious', language: 'Avestan', languageSlug: 'avestan', preservation: 'Oral tradition', region: 'Central Asia', tags: ['Hymns', 'Ethics', 'Ahura Mazda', 'Dualism', 'Oral Tradition'] },
	{ slug: 'vendidad', title: 'Vendidad', author: 'Unknown', period: '~500 BCE', genre: 'Religious', language: 'Avestan', languageSlug: 'avestan', preservation: 'Manuscript', region: 'Persia', tags: ['Ritual', 'Purity', 'Law', 'Demons', 'Zoroastrianism'] },
	{ slug: 'behistun-inscription', title: 'Behistun Inscription', author: 'Darius I', period: '~520 BCE', genre: 'Royal Inscription', language: 'Old Persian', languageSlug: 'old-persian', preservation: 'Rock inscription', region: 'Persia', annotator: 'Henry Rawlinson', tags: ['Trilingual', 'Propaganda', 'Victory', 'Decipherment'] },
	{ slug: 'persepolis-fortification-tablets', title: 'Persepolis Fortification Tablets', author: 'Various', period: '~500 BCE', genre: 'Administrative', language: 'Old Persian', languageSlug: 'old-persian', preservation: 'Clay tablet', region: 'Persia', tags: ['Economy', 'Rations', 'Trade', 'Workers'] },
];
