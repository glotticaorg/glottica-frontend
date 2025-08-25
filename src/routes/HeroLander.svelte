<div class="flex-1 flex flex-col">
	<div class="hero flex-1">
		<div class="hero-content flex-col lg:flex-row-reverse my-4">
			<div class="text-center lg:text-left lg:ml-8 shrink-0">
				<h1 class="text-5xl font-bold">Login now!</h1>
				<p class="my-6">
					<a href="/profile/register" class="link">Create an account to start learning</a>
				</p>
			</div>
			<div class="card bg-base-100 w-full max-w-sm shrink-0">
				<div class="card-body">
					<fieldset class="fieldset">
						<label class="floating-label">
							<input type="email" placeholder="Email" class="input validator" name="email" required />
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
							<div class="validator-hint hidden">
								Passwords must contain 8 to 64 characters
							</div>
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
	<div class="bg-base-100 py-4 lg:py-8 stats stats-vertical lg:stats-horizontal rounded-none">
		<div class="stat place-items-center">
			<div class="stat-title">Languages</div>
			<div class="stat-value">7</div>
			<div class="stat-desc">Explore all learning materials</div>
		</div>
		<div class="stat place-items-center">
			<div class="stat-title">Universities</div>
			<div class="stat-value">3</div>
			<div class="stat-desc">Collaborations with leading institutes</div>
		</div>
		<div class="stat place-items-center">
			<div class="stat-title">Templates</div>
			<div class="stat-value">35</div>
			<div class="stat-desc">MS Office, TeX, and Typst support</div>
		</div>
		<div class="stat place-items-center">
			<div class="stat-title">Keybinds</div>
			<div class="stat-value">1,200</div>
			<div class="stat-desc">Windows and Mac support</div>
		</div>
	</div>
	<div class="bg-base-200 py-8 px-10 lg:px-50">
		<h2 class="text-2xl font-bold mb-4">Discover the benefits!</h2>
		<div class="flex w-full flex-col lg:flex-row">
			<div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">For professors</div>
			<div class="divider lg:divider-horizontal">OR</div>
			<div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">For students</div>
		</div>
	</div>
</div>

<style>
.stat-desc, .stat-title {
  @supports (color: color-mix(in lab, red, red)) {
    color: color-mix(in oklab, var(--color-base-content) 80%, transparent);
  }
}
</style>
