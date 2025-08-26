<form class="flex flex-column">
	<!-- TODO positioning this container -->
	<ul class="steps steps-vertical flex-1">
		<li class="step">
			<div class="join join-vertical lg:join-horizontal block">
				<legend class="fieldset-legend">Content type</legend>
				<input
					type="radio"
					name="template"
					class="btn join-item"
					aria-label="Paper"
					value="Paper"
				/>
				<input
					type="radio"
					name="template"
					class="btn join-item"
					aria-label="Syllabus"
					value="syllabus"
				/>
				<input
					type="radio"
					name="template"
					class="btn join-item"
					aria-label="Slides"
					value="slides"
				/>
			</div>
		</li>
		<li class="step">
			<div class="join join-vertical lg:join-horizontal block">
				<legend
					class="fieldset-legend tooltip"
					data-tip="Please specify what typesetting application you want to use."
					>Application</legend
				>
				<input
					type="radio"
					name="application"
					class="btn join-item"
					aria-label="TeX"
					value="tex"
				/>
				<input
					type="radio"
					name="application"
					class="btn join-item"
					aria-label="Typst"
					value="typst"
				/>
			</div>
		</li>
		<li class="step">
			<fieldset class="fieldset">
				<legend
					class="fieldset-legend tooltip"
					data-tip="You can provide your institution's logo as a .svg or .png file to be displayed on the cover page."
					>Affiliation logo</legend
				>
				<input
					type="file"
					name="logo"
					class="file-input file-input-primary"
					aria-label="affiliation logo"
					accept=".svg,.png"
				/>
			</fieldset>
		</li>
		<li class="step">
			<fieldset class="fieldset">
				<legend
					class="fieldset-legend tooltip"
					data-tip="Please provide a .woff, .woff2, .ttf, or .otf font file."
					>Font</legend
				>
				<input
					type="file"
					name="font"
					class="file-input file-input-primary"
					aria-label="font"
					accept=".woff,.woff2,.otf,.ttf"
				/>
			</fieldset>
		</li>
		<li class="step">
			<fieldset class="fieldset">
				<legend
					class="fieldset-legend tooltip"
					data-tip="Please consult your institution's style guide for the exact value."
					>Theme color</legend
				>
				<input
					type="text"
					name="color"
					class="input"
					placeholder="#000000"
					aria-label="theme color"
				/>
			</fieldset>
		</li>
		<li class="step">
			<div class="join join-vertical lg:join-horizontal block">
				<legend class="fieldset-legend">Citation style</legend>
				<input
					type="radio"
					name="citations"
					class="btn join-item"
					aria-label="Unified"
					value="unified"
				/>
				<input
					type="radio"
					name="citations"
					class="btn join-item"
					aria-label="APA"
					value="apa"
				/>
				<input
					type="radio"
					name="citations"
					class="btn join-item"
					aria-label="MLA"
					value="mla"
				/>
			</div>
		</li>
		<li class="step">
			<button class="btn btn-primary join-item">Generate!</button>
		</li>
	</ul>
</form>
