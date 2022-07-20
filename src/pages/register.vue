<script setup lang="ts">
definePageMeta({
	layout: 'form',
})

useHead({
	title: 'Register',
})

const email = ref('')
const password = ref('')
</script>

<template>
	<div class="flex flex-col space-y-4">
		<h1 class="font-bold text-2xl">Register</h1>
		<ui-form @submit.prevent>
			<ui-text-field label="Email" v-model="email" type="email" />
			<ui-text-field
				label="Password"
				v-model="password"
				type="password"
			/>
			<button class="btn btn-solid-primary w-full" type="submit">
				<div class="i-lucide-user-plus" />
				<span>Register</span>
			</button>
		</ui-form>
		<p class="text-sm">
			Already have an account?
			<nuxt-link class="text-link" to="/login">Login</nuxt-link>
		</p>
	</div>
</template>
