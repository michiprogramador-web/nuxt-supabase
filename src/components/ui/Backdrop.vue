<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
</script>

<template>
	<transition name="backdrop">
		<div
			v-if="modelValue"
			class="bg-black/50 fixed h-screen left-0 top-0 w-screen"
		/>
	</transition>
</template>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
	transition: opacity 0.5s;
}
.backdrop-enter-from,
.backdrop-leave-to {
	opacity: 0;
}
</style>
