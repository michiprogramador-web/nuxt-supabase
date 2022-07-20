<script setup lang="ts">
definePageMeta({
	layout: 'form',
})

useHead({
	title: 'Login',
})

const email = ref('')
const password = ref('')
</script>

<template>
	<div class="flex flex-col space-y-4">
		<h1 class="font-bold text-2xl">Login</h1>
		<ui-form @submit.prevent>
			<ui-text-field label="Email" v-model="email" type="email" />
			<ui-text-field
				label="Password"
				v-model="password"
				type="password"
			/>
			<button class="btn btn-solid-primary w-full" type="submit">
				<div class="i-lucide-log-in" />
				<span>Login</span>
			</button>
		</ui-form>
		<p class="text-sm">
			Don't have an account?
			<nuxt-link class="text-link" to="/register">Register</nuxt-link>
		</p>
	</div>
</template>
