<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: 'bg-gray-100',
	},
})
</script>

<template>
	<div class="flex flex-col h-screen overflow-hidden">
		<nav-bar />
		<div class="flex-1 h-full overflow-y-auto">
			<ui-container class="py-12">
				<slot />
			</ui-container>
		</div>
	</div>
</template>
