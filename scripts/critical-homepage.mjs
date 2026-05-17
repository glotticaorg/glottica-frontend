import { generate } from 'critical';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const dimensions = [
	{ width: 375, height: 812 },
	{ width: 768, height: 1024 },
	{ width: 1024, height: 1366 },
	{ width: 1280, height: 800 },
	{ width: 1920, height: 1080 },
];

async function inlineCritical(clientBase, prerenderedBase) {
	const htmlPath = resolve(prerenderedBase, 'index.html');
	let { html } = await generate({
		base: clientBase,
		html: await readFile(htmlPath, 'utf-8'),
		inline: true,
		rebase: {
			from: clientBase,
			to: prerenderedBase,
		},
		dimensions,
	});
	// critical inlines @layer blocks in processing order (utilities first), but Tailwind v4
	// requires theme < base < utilities. Establish the correct order so the browser doesn't
	// let base resets (*{margin:0;padding:0}) override utility classes.
	html = html.replace('<style>', '<style>@layer theme,base,utilities;');
	await writeFile(htmlPath, html, 'utf-8');
}

const targets = [
	[resolve('build/client'), resolve('build/prerendered')],
	[resolve('.svelte-kit/output/client'), resolve('.svelte-kit/output/prerendered/pages')],
];

for (const [clientBase, prerenderedBase] of targets) {
	await inlineCritical(clientBase, prerenderedBase);
}
