<script setup lang="ts">
const drawer = ref(false)

const navLinks: NavLink[] = [
	{
		text: 'Home',
		to: '/',
	},
	{
		text: 'Music',
		to: '/music',
	},
]
</script>

<template>
	<div class="bg-white py-4 sm:py-6 shadow sticky top-0 z-10">
		<ui-container class="flex items-center justify-between">
			<nuxt-link to="/">
				<brand />
			</nuxt-link>
			<div class="hidden sm:flex items-center">
				<nav-link v-for="{ to, text } in navLinks" :to="to">
					{{ text }}
				</nav-link>
			</div>
			<div class="hidden sm:flex items-center">
				<nuxt-link class="btn btn-text-gray" to="/login">
					Login
				</nuxt-link>
				<nuxt-link class="btn btn-solid-primary ml-2" to="/register">
					Register
				</nuxt-link>
			</div>
			<button
				@click="drawer = true"
				class="flex sm:hidden icon-btn btn-text-gray"
			>
				<div class="i-lucide-menu" />
			</button>
		</ui-container>
		<nav-drawer v-model="drawer" :nav-links="navLinks" />
	</div>
</template>
