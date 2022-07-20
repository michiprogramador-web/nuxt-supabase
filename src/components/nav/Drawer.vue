<script setup lang="ts">
defineProps<{ modelValue: boolean; navLinks: NavLink[] }>()
const emit = defineEmits(['update:modelValue'])

const route = useRoute()

watch(route, () => {
	emit('update:modelValue', false)
})

const target = ref()

onClickOutside(target, () => emit('update:modelValue', false))
</script>

<template>
	<ui-backdrop v-model="modelValue" />
	<transition name="menu">
		<div
			v-if="modelValue"
			class="bg-white fixed flex flex-col h-screen max-w-xs right-0 top-0 w-full"
			ref="target"
		>
			<div class="flex items-center justify-end p-4">
				<button
					@click="$emit('update:modelValue', false)"
					class="icon-btn btn-text-gray"
				>
					<div class="i-lucide-x" />
				</button>
			</div>
			<div class="flex flex-col h-full p-4 space-y-2">
				<nav-link
					v-for="{ text, to } in navLinks"
					class="w-full"
					:to="to"
				>
					{{ text }}
				</nav-link>
				<nuxt-link
					class="btn btn-text-gray !mt-auto w-full"
					to="/music"
				>
					Login
				</nuxt-link>
				<nuxt-link class="btn btn-solid-primary w-full" to="/music">
					Register
				</nuxt-link>
			</div>
		</div>
	</transition>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
	transition: transform 0.2s;
}
.menu-enter-from,
.menu-leave-to {
	transform: translateX(100%);
}
</style>
