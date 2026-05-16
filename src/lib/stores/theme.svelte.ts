const THEME_KEY = 'glottica-theme';

function getInitialTheme(): boolean {
	if (typeof document === 'undefined') return false;
	return document.documentElement.classList.contains('dark');
}

let darkMode = $state(getInitialTheme());

export const theme = {
	get darkMode() {
		return darkMode;
	},
	toggle() {
		darkMode = !darkMode;
		document.documentElement.classList.toggle('dark', darkMode);
		localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
	}
};
