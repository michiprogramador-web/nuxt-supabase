<template>
	<div>
		<nav class="p-4">
			<nuxt-link class="btn btn-text-gray" to="/">
				<div class="i-lucide-arrow-left" />
				<span>Back to Home</span>
			</nuxt-link>
		</nav>
		<div
			class="flex flex-1 flex-col h-full justify-center max-w-sm mx-auto p-8 text-center w-full"
		>
			<slot />
		</div>
	</div>
</template>
