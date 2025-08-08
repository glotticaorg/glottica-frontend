<div class="hero min-h-[80dvh]">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left lg:ml-8">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Create an account to manage your progress.</p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0">
      <div class="card-body">
        <fieldset class="fieldset">
          <label class="floating-label mb-1">
            <input type="email" placeholder="Email" class="input validator" name="email" required />
            <span>Email</span>
            <div class="validator-hint">Enter valid email address</div>
          </label>
          <label class="floating-label my-1">
            <input type="password" placeholder="Password" class="input validator" name="password" minlength="8" maxlength="64" required />
            <span>Password</span>
            <div class="validator-hint">Valid passwords must contain between 8 and 64 characters</div>
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
