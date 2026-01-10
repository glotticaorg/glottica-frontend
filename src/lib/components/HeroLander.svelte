<script>
	import FlexHero from './FlexHero.svelte';
	import LanguageIcon from './icons/LanguageIcon.svelte';
	import Link from './Link.svelte';
	import PageHeader from './PageHeader.svelte';
	import ResponsiveAlignment from './ResponsiveAlignment.svelte';
</script>

<FlexHero>
	<div class="relative overflow-hidden w-full">
		<LanguageIcon />
		<div class="hero-content flex-col lg:flex-row-reverse my-24">
			<div class="shrink-0 lg:ml-8">
				<ResponsiveAlignment>
					<PageHeader>Login now!</PageHeader>
					<p class="my-6">
						Or <a href="/profile/register" class="link">create an account</a> for
						free to start learning
					</p>
				</ResponsiveAlignment>
			</div>
			<div class="card shadow bg-base-100/90 w-full max-w-sm shrink-0">
				<div class="card-body">
					<fieldset class="fieldset">
						<label class="floating-label">
							<input
								type="email"
								placeholder="Email"
								class="input validator w-full"
								name="email"
								autocomplete="email"
								required
							/>
							<span>Email</span>
							<div class="validator-hint hidden">
								Enter valid email address
							</div>
						</label>
						<label class="floating-label my-2">
							<input
								type="password"
								placeholder="Password"
								class="input validator w-full"
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
							<Link href="/profile/password/">Forgot password?</Link>
						</div>
						<button class="btn btn-neutral mt-4">Login</button>
					</fieldset>
				</div>
			</div>
		</div>
	</div>
</FlexHero>
