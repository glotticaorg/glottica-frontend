const THEME_KEY = 'glottica-theme';

function getInitialTheme(): boolean {
	if (typeof document === 'undefined') return false;
	return document.documentElement.dataset.theme === 'dark';
}

let darkMode = $state(getInitialTheme());

export const theme = {
	get darkMode() {
		return darkMode;
	},
	toggle() {
		darkMode = !darkMode;
		const value = darkMode ? 'dark' : 'light';
		document.documentElement.dataset.theme = value;
		localStorage.setItem(THEME_KEY, value);
	}
};
