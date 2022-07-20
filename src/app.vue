<script setup lang="ts">
useHead({
	link: [
		{
			href: 'https://fonts.googleapis.com',
			rel: 'preconnect',
		},
		{
			crossorigin: 'anonymous',
			href: 'https://fonts.gstatic.com',
			rel: 'preconnect',
		},
		{
			href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&display=swap',
			rel: 'stylesheet',
		},
	],
})
</script>

<template>
	<div class="font-sans h-screen overflow-hidden text-gray-900">
		<nuxt-layout>
			<nuxt-page />
		</nuxt-layout>
	</div>
</template>
