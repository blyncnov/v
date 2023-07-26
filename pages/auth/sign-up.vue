<template>
    <div class="login_container_section">
        <div class="auth-container-box auth-main">
            <div class="auth-inner-container">
                <section>
                    <div class="auth-profile-section-register">
                        <section>
                            <div class="auth-profile-section-register">
                                <h3 class="auth-greet-text">Create New Account</h3>
                                <p>Become an Agent today <br />Please Fill the form below to get started. </p>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div class="auth-form-section">
                        <form action="POST">
                            <div class="auth-form-container">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" placeholder="" id="first_name" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Email Address </label>
                                <input type="email" placeholder="" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Gender </label>
                                <select name="gender" id="gender">
                                    <option value="Choose">Choose Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Password </label>
                                <input type="password" />
                            </div>
                            <div class="auth-form-container">
                                <label htmlFor="first_name">Confirm Password </label>
                                <input type="password" />
                            </div>
                            <div class="auth-form-container">
                                <button>Create Account</button>
                            </div>
                        </form>
                        <div class="auth-login-options">
                            <div class="login__check">
                                <NuxtLink href="/auth/reset-password">Forgot Password</NuxtLink>
                                <NuxtLink href="/auth/sign-in">Sign In</NuxtLink>
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
.var {
    width: 100%;
}
</style>
