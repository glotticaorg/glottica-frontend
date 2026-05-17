export const LABELS: Record<string, string> = {
	learn: 'Learn',
	languages: 'Languages',
	scripts: 'Scripts',
	flashcards: 'Flashcards',
	texts: 'Texts',
	tools: 'Tools',
	hotkeys: 'Hotkeys',
	typesetting: 'Typesetting',
	generator: 'Generator',
	'about-us': 'About us',
	contact: 'Contact',
	partnerships: 'Partnerships',
	calendar: 'Calendar',
	donate: 'Donate',
	feedback: 'Feedback',
	legal: 'Legal',
	accessibility: 'Accessibility',
	cookies: 'Cookies',
	disclosures: 'Disclosures',
	privacy: 'Privacy',
	'responsible-disclosure': 'Responsible Disclosure',
	tos: 'Terms of Service',
	profile: 'Profile',
	login: 'Login',
	register: 'Register',
	password: 'Password'
};

export function resolveLabel(
	segment: string,
	data: Record<string, unknown>,
	params: Record<string, string>
): string {
	if (segment in LABELS) return LABELS[segment];
	if (segment === params.language) return (data.language as { name?: string })?.name ?? segment;
	if (segment === params.script) return (data.script as { name?: string })?.name ?? segment;
	if (segment === params.text) return (data.text as { title?: string })?.title ?? segment;
	if (segment === params.event) return (data.event as { title?: string })?.title ?? segment;
	return segment;
}
