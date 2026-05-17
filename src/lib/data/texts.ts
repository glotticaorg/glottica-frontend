export type Text = {
	title: string;
	author: string;
	period: string;
	genre: string;
	language: string;
	languageSlug: string;
};

export const texts: Text[] = [
	{ title: 'Iliad', author: 'Homer', period: '~750 BCE', genre: 'Epic', language: 'Attic Greek', languageSlug: 'attic-greek' },
	{ title: 'Odyssey', author: 'Homer', period: '~725 BCE', genre: 'Epic', language: 'Attic Greek', languageSlug: 'attic-greek' },
	{ title: 'Republic', author: 'Plato', period: '~375 BCE', genre: 'Philosophy', language: 'Attic Greek', languageSlug: 'attic-greek' },
	{ title: 'Oedipus Rex', author: 'Sophocles', period: '~429 BCE', genre: 'Tragedy', language: 'Attic Greek', languageSlug: 'attic-greek' },
	{ title: 'Aeneid', author: 'Virgil', period: '~19 BCE', genre: 'Epic', language: 'Latin', languageSlug: 'latin' },
	{ title: 'De Bello Gallico', author: 'Julius Caesar', period: '~50 BCE', genre: 'History', language: 'Latin', languageSlug: 'latin' },
	{ title: 'De Rerum Natura', author: 'Lucretius', period: '~55 BCE', genre: 'Philosophy', language: 'Latin', languageSlug: 'latin' },
	{ title: 'Rigveda', author: 'Various', period: '~1500 BCE', genre: 'Religious', language: 'Sanskrit', languageSlug: 'sanskrit' },
	{ title: 'Mahabharata', author: 'Vyasa', period: '~400 BCE', genre: 'Epic', language: 'Sanskrit', languageSlug: 'sanskrit' },
	{ title: 'Völuspá', author: 'Unknown', period: '~1000 CE', genre: 'Eddic Poetry', language: 'Old Norse', languageSlug: 'old-norse' },
	{ title: 'Hávamál', author: 'Unknown', period: '~1200 CE', genre: 'Eddic Poetry', language: 'Old Norse', languageSlug: 'old-norse' },
	{ title: 'Prose Edda', author: 'Snorri Sturluson', period: '~1220 CE', genre: 'Mythology', language: 'Old Norse', languageSlug: 'old-norse' },
	{ title: 'Beowulf', author: 'Unknown', period: '~700 CE', genre: 'Epic', language: 'Old English', languageSlug: 'old-english' },
	{ title: 'The Wanderer', author: 'Unknown', period: '~975 CE', genre: 'Elegy', language: 'Old English', languageSlug: 'old-english' },
	{ title: 'Anglo-Saxon Chronicle', author: 'Various', period: '~890 CE', genre: 'History', language: 'Old English', languageSlug: 'old-english' },
	{ title: 'Codex Argenteus', author: 'Wulfila', period: '~350 CE', genre: 'Scripture', language: 'Gothic', languageSlug: 'gothic' },
	{ title: 'Telepinu Myth', author: 'Unknown', period: '~1500 BCE', genre: 'Mythology', language: 'Hittite', languageSlug: 'hittite' },
	{ title: 'Hittite Laws', author: 'Unknown', period: '~1650 BCE', genre: 'Legal', language: 'Hittite', languageSlug: 'hittite' },
	{ title: 'Codex Suprasliensis', author: 'Unknown', period: '~1000 CE', genre: 'Hagiography', language: 'Old Church Slavonic', languageSlug: 'old-church-slavonic' },
	{ title: 'Ostromir Gospels', author: 'Deacon Gregory', period: '1056 CE', genre: 'Scripture', language: 'Old Church Slavonic', languageSlug: 'old-church-slavonic' },
	{ title: 'Gathas', author: 'Zarathustra', period: '~1000 BCE', genre: 'Religious', language: 'Avestan', languageSlug: 'avestan' },
	{ title: 'Vendidad', author: 'Unknown', period: '~500 BCE', genre: 'Religious', language: 'Avestan', languageSlug: 'avestan' },
	{ title: 'Behistun Inscription', author: 'Darius I', period: '~520 BCE', genre: 'Royal Inscription', language: 'Old Persian', languageSlug: 'old-persian' },
	{ title: 'Persepolis Fortification Tablets', author: 'Various', period: '~500 BCE', genre: 'Administrative', language: 'Old Persian', languageSlug: 'old-persian' }
];
