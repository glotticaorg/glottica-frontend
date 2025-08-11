<div class="flex flex-row">
	<ul class="steps steps-vertical pr-10">
		<li class="step step-primary">Type</li>
		<li class="step">Application</li>
		<li class="step">Theme</li>
		<li class="step">Citations</li>
		<li class="step">Download</li>
	</ul>

	<form>
		<div class="join join-vertical lg:join-horizontal">
			<input type="radio" name="template" class="btn join-item" aria-label="Paper" value="Paper" />
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

		<div class="join join-vertical lg:join-horizontal">
			<input type="radio" name="application" class="btn join-item" aria-label="TeX" value="tex" />
			<input
				type="radio"
				name="application"
				class="btn join-item"
				aria-label="Typst"
				value="typst"
			/>
		</div>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">Affiliation logo</legend>
			<input type="file" class="file-input file-input-primary" />
		</fieldset>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">Font</legend>
			<input type="file" class="file-input file-input-primary" />
		</fieldset>

		<p>TODO color picker</p>

		<div class="join join-vertical lg:join-horizontal">
			<input
				type="radio"
				name="citations"
				class="btn join-item"
				aria-label="Unified"
				value="unified"
			/>
			<input type="radio" name="citations" class="btn join-item" aria-label="APA" value="apa" />
			<input type="radio" name="citations" class="btn join-item" aria-label="MLA" value="mla" />
		</div>

		<button class="btn btn-primary join-item">Generate!</button>
	</form>
</div>
