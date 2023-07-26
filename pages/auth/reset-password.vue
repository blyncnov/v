<template>
    <div class="login_container_section">
        <div class="auth-container-box auth-main">
            <div class="auth-inner-container">
                <section>
                    <div class="auth-profile-section-register">
                        <section>
                            <div class="auth-profile-section-register">
                                <h3 class="auth-greet-text">Reset Password</h3>
                                <p>Provide your valid email address to reset your password</p>
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
                                <button>Reset Password</button>
                            </div>
                        </form>
                        <div class="auth-login-options">
                            <div class="login__check">
                                <NuxtLink href="/auth/sign-in">Sign In</NuxtLink>
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
