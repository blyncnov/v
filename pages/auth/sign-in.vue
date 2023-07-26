<template>
  <div class="login_container_section">
    <div class="auth-container-box auth-main">
      <div class="auth-inner-container">
        <section>
          <div class="auth-profile-section-register">
            <section>
              <div class="auth-profile-section-register">
                <h3 className="auth-greet-text">Welcome Back!</h3>
                <p>Sign in to continue</p>
              </div>
            </section>
          </div>
        </section>
        <section>
          <div class="auth-form-section">
            <form action="POST">
              <div class="auth-form-container">
                <label htmlFor="first_name">Email Address </label>
                <input type="email" placeholder="" />
              </div>
              <div class="auth-form-container">
                <label htmlFor="first_name">Password </label>
                <input type="password" />
              </div>
              <div class="auth-form-container">
                <button>Sign In</button>
              </div>
            </form>
            <div class="auth-login-options">
              <div class="login__check">
                <NuxtLink href="/auth/reset-password">Forgot Password</NuxtLink>
                <NuxtLink href="/auth/sign-up">Sign Up</NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.login_container_sectinon {
  width: auto;
}
</style>
