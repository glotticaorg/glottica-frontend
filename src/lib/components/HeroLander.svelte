<div class="flex-1 flex flex-col">
	<div class="hero flex-1">
		<div class="relative overflow-hidden w-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-80 top-70 lg:top-20 left-20 absolute opacity-60 rotate-30 overflow-hidden"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
				/>
			</svg>
			<div class="hero-content flex-col lg:flex-row-reverse my-24">
				<div class="text-center lg:text-left lg:ml-8 shrink-0">
					<h1 class="text-5xl font-bold">Login now!</h1>
					<p class="my-6">
						Or <a href="/profile/register" class="link">create an account</a> for free to start learning
					</p>
				</div>
				<div class="card shadow bg-base-100/90 w-full max-w-sm shrink-0">
					<div class="card-body">
						<fieldset class="fieldset">
							<label class="floating-label">
								<input
									type="email"
									placeholder="Email"
									class="input validator"
									name="email"
									autocomplete="email"
									required
								/>
								<span>Email</span>
								<div class="validator-hint hidden">Enter valid email address</div>
							</label>
							<label class="floating-label my-2">
								<input
									type="password"
									placeholder="Password"
									class="input validator"
									name="password"
									minlength="8"
									maxlength="64"
									required
								/>
								<span>Password</span>
								<div class="validator-hint hidden">Passwords must contain 8 to 64 characters</div>
							</label>
							<div>
								<a class="link link-hover" href="/profile/password/">Forgot password?</a>
							</div>
							<button class="btn btn-neutral mt-4">Login</button>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="bg-base-100 shadow py-4 lg:py-8 stats stats-vertical lg:stats-horizontal rounded-none"
	>
		<div class="stat place-items-center">
			<div class="stat-title">Languages</div>
			<div class="stat-value">7</div>
			<div class="stat-desc">Explore all learning materials</div>
		</div>
		<div class="stat place-items-center">
			<div class="stat-title">Universities</div>
			<div class="stat-value">3</div>
			<div class="stat-desc">Leading institutional partners</div>
		</div>
		<div class="stat place-items-center">
			<div class="stat-title">Templates</div>
			<div class="stat-value">35</div>
			<div class="stat-desc">Office, TeX, and Typst support</div>
		</div>
		<div class="stat place-items-center">
			<div class="stat-title">Keybinds</div>
			<div class="stat-value">1000+</div>
			<div class="stat-desc">For both Windows and Mac</div>
		</div>
	</div>
	<div class="bg-base-200 py-8 px-10 lg:px-50">
		<h2 class="text-2xl font-bold mb-6">Discover the benefits for free &mdash; forever!</h2>
		<div class="flex w-full flex-col lg:flex-row">
			<div class="card shadow bg-base-300 rounded-box grid min-h-32 flex-1 px-8 py-6">
				<h2 class="text-xl mb-2">For teachers and staff</h2>
				<ul class="steps steps-vertical">
					<li class="step step-primary">Useful writing tools and keybinds</li>
					<li class="step step-primary">Easily publish course materials</li>
					<li class="step step-primary">Support students in learning</li>
					<li class="step step-primary">Set up templates for students</li>
				</ul>
			</div>
			<div class="divider lg:divider-horizontal lg:m-8">AND</div>
			<div class="card shadow bg-base-300 rounded-box grid min-h-32 flex-1 grow px-8 py-6">
				<h2 class="text-xl mb-2">For students</h2>
				<ul class="steps steps-vertical">
					<li class="step step-primary">Create your own word lists</li>
					<li class="step step-primary">Learn new scripts effortlessly</li>
					<li class="step step-primary">Import from and export to Anki</li>
					<li class="step step-primary">Rehearse at the optimal time</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.stat-desc,
	.stat-title {
		@supports (color: color-mix(in lab, red, red)) {
			color: color-mix(in oklab, var(--color-base-content) 80%, transparent);
		}
	}
</style>
