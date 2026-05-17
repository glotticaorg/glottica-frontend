export type CalendarEvent = {
	slug: string;
	title: string;
	date: string;       // ISO "YYYY-MM-DD"
	time: string;       // e.g. "09:00–17:00 CEST"
	location: string;
	abstract: string;
	tags: string[];
	format: string;     // "Conference" | "Workshop" | "Lecture" | "Seminar" | "Summer School"
	organizer?: string;
};

export const events: CalendarEvent[] = [
	{
		slug: 'greek-epigraphy-workshop',
		title: 'Greek Epigraphy Workshop',
		date: '2026-07-08',
		time: '09:00–17:00 CEST',
		location: 'Classics Centre, University of Oxford, UK',
		abstract: 'A hands-on workshop on reading and interpreting inscriptions from the Archaic through Hellenistic periods. Participants will work directly with squeezes and high-resolution photographs of epigraphic material housed at the Ashmolean Museum, with sessions on formulaic language, letter-form dating, and regional dialect variation.',
		tags: ['Greek', 'Epigraphy', 'Palaeography', 'Dialects'],
		format: 'Workshop',
		organizer: 'University of Oxford, Faculty of Classics',
	},
	{
		slug: 'indo-european-linguistics-conference',
		title: '19th International Conference on Indo-European Linguistics',
		date: '2026-08-24',
		time: '09:00–18:00 CEST',
		location: 'University of Vienna, Austria',
		abstract: 'The biennial gathering of Indo-Europeanists, covering phonological reconstruction, laryngeal theory, morphosyntactic typology, and the computational modelling of proto-language features. Keynote speakers will address new findings in Anatolian and Tocharian that bear on the PIE homeland debate.',
		tags: ['Indo-European', 'Linguistics', 'Phonology', 'Morphology', 'Reconstruction'],
		format: 'Conference',
		organizer: 'Department of Linguistics, University of Vienna',
	},
	{
		slug: 'cuneiform-reading-seminar',
		title: 'Cuneiform Reading and Interpretation Seminar',
		date: '2026-09-15',
		time: '10:00–16:00 BST',
		location: 'British Museum, London, UK',
		abstract: 'An intensive seminar introducing participants to Sumero-Akkadian cuneiform, with guided reading of administrative, literary, and legal tablets from the British Museum collection. Special attention is given to Hittite cuneiform and Old Persian syllabary alongside the dominant Akkadian tradition.',
		tags: ['Cuneiform', 'Hittite', 'Old Persian', 'Decipherment', 'Archaeology'],
		format: 'Seminar',
		organizer: 'British Museum, Ancient Near East Department',
	},
	{
		slug: 'sanskrit-prakrits-symposium',
		title: 'Sanskrit and Prakrits in Manuscript Tradition',
		date: '2026-10-05',
		time: '09:30–17:30 BST',
		location: 'Faculty of Oriental Studies, University of Cambridge, UK',
		abstract: 'Scholars present new research on Sanskrit and Middle Indo-Aryan texts preserved in South and Southeast Asian manuscript traditions, with discussions on stemmatic method, scribal practice, and the relationship between orality and textual transmission. A workshop on Devanāgarī palaeography is included on the second day.',
		tags: ['Sanskrit', 'Manuscripts', 'Philology', 'Indo-Aryan', 'Palaeography'],
		format: 'Conference',
		organizer: 'Cambridge Faculty of Oriental Studies',
	},
	{
		slug: 'old-norse-summer-school',
		title: 'Old Norse Language and Eddic Poetry Summer School',
		date: '2026-07-20',
		time: '09:00–15:00 GMT',
		location: 'University of Iceland, Reykjavik, Iceland',
		abstract: 'A two-week intensive course for intermediate learners covering Old Norse grammar, the Poetic Edda, and saga prose. Daily reading sessions are supplemented by seminars on Norse mythology, skaldic metre, and the transmission of Eddic material through the Codex Regius and its relatives.',
		tags: ['Old Norse', 'Literature', 'Mythology', 'Linguistics', 'Eddic Poetry'],
		format: 'Summer School',
		organizer: 'Stofnun Árna Magnússonar í íslenskum fræðum',
	},
	{
		slug: 'ancient-scripts-decipherment',
		title: 'Ancient Scripts and Undeciphered Writing Systems',
		date: '2026-09-28',
		time: '10:00–18:00 CEST',
		location: 'Humboldt University, Berlin, Germany',
		abstract: 'A cross-disciplinary workshop examining the state of decipherment efforts for Linear A, Proto-Sinaitic, the Indus script, and Rongorongo. Sessions combine linguistic, computational, and archaeological perspectives, with working groups devoted to new corpus materials and the application of machine learning to sign clustering.',
		tags: ['Decipherment', 'Epigraphy', 'Semiotics', 'Scripts', 'Computational Linguistics'],
		format: 'Workshop',
		organizer: 'Humboldt Universität, Institut für Altertumswissenschaften',
	},
	{
		slug: 'classical-studies-congress',
		title: 'International Congress of Classical Studies',
		date: '2026-11-10',
		time: '09:00–18:00 EET',
		location: 'National and Kapodistrian University of Athens, Greece',
		abstract: 'The flagship triennial gathering of classical scholars, with parallel panels on Greek and Latin literature, ancient history, epigraphy, numismatics, papyrology, and the reception of antiquity. Over two hundred papers will be presented across five days, with a plenary address on recent excavations at Vergina.',
		tags: ['Greek', 'Latin', 'History', 'Literature', 'Philology', 'Archaeology'],
		format: 'Conference',
		organizer: 'International Federation of Societies of Classical Studies',
	},
	{
		slug: 'avestan-zoroastrian-lecture',
		title: 'Avestan Language and the Zoroastrian Sacred Texts',
		date: '2026-06-18',
		time: '18:00–20:00 BST',
		location: 'School of Oriental and African Studies, London, UK',
		abstract: 'A public lecture surveying the phonology and morphology of Avestan, the oldest attested Iranian language, and its role in the transmission of the Gāthās and Younger Avesta. The speaker will examine how oral-formulaic composition shaped the textual form of the sacred corpus and compare Avestan metre to that of the Rigveda.',
		tags: ['Avestan', 'Old Persian', 'Iranian', 'Linguistics', 'Religion'],
		format: 'Lecture',
		organizer: 'SOAS, Department of the Languages of Africa and the Near and Middle East',
	},
	{
		slug: 'medieval-manuscripts-paris',
		title: 'Medieval Manuscripts and Latin Palaeography',
		date: '2026-08-10',
		time: '09:00–17:00 CEST',
		location: 'École Normale Supérieure, Paris, France',
		abstract: 'A practical workshop on reading Latin scripts from Caroline minuscule through Gothic book hand, using digitised manuscripts from the Bibliothèque nationale de France. Topics include abbreviation systems, ruling patterns, and the codicological description of parchment and paper codices, with a guided visit to the BnF manuscript reading room.',
		tags: ['Latin', 'Manuscripts', 'Palaeography', 'Medieval', 'Codicology'],
		format: 'Workshop',
		organizer: "École Normale Supérieure, Département des Sciences de l'Antiquité",
	},
	{
		slug: 'pie-reconstruction-leiden',
		title: 'Proto-Indo-European Phonology and Morphology Seminar',
		date: '2026-11-23',
		time: '09:30–17:00 CET',
		location: 'Leiden University Centre for Linguistics, Netherlands',
		abstract: 'A research seminar presenting current work on the reconstruction of the PIE root structure, the laryngeal consonants, and verbal paradigms. Invited discussions will address competing models of the ablaut system and their implications for the classification of early-attested daughter branches including Anatolian, Greek, and Vedic.',
		tags: ['Indo-European', 'Phonology', 'Morphology', 'Linguistics', 'Reconstruction'],
		format: 'Seminar',
		organizer: 'LUCL – Leiden University Centre for Linguistics',
	},
	{
		slug: 'hittite-anatolian-chicago',
		title: 'Hittite and Anatolian Languages Symposium',
		date: '2026-10-19',
		time: '09:00–17:00 CDT',
		location: 'Oriental Institute, University of Chicago, USA',
		abstract: 'An interdisciplinary symposium bringing together Hittitologists, archaeologists, and linguists to discuss the latest tablet finds from Boğazköy-Hattuša and their implications for Hittite grammar and Anatolian cultural history. A special session is dedicated to the recently discovered Luwian hieroglyphic inscriptions from southeastern Turkey.',
		tags: ['Hittite', 'Cuneiform', 'Anatolian', 'Archaeology', 'Luwian'],
		format: 'Seminar',
		organizer: 'Oriental Institute, University of Chicago',
	},
	{
		slug: 'runic-inscriptions-workshop',
		title: 'Runic Inscriptions and Germanic Literacy',
		date: '2026-06-30',
		time: '10:00–16:00 CEST',
		location: 'Ludwig Maximilian University, Munich, Germany',
		abstract: 'A workshop examining the Elder and Younger Futhark corpora and the Gothic alphabet as evidence for early Germanic literacy practices. Sessions compare runic traditions across Scandinavia, the British Isles, and the Continent, and assess new readings of disputed inscriptions using reflectance transformation imaging.',
		tags: ['Old Norse', 'Old English', 'Gothic', 'Epigraphy', 'Runes', 'Germanic'],
		format: 'Workshop',
		organizer: 'Ludwig Maximilian University Munich, Institut für Nordische Philologie',
	},
];

export function formatEventDate(iso: string): string {
	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	}).format(new Date(iso + 'T12:00:00Z'));
}
