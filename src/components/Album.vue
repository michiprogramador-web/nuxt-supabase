<script setup lang="ts">
defineProps<{ title: string; artist: string; cover: string }>()
</script>

<template>
	<ui-card class="group">
		<div class="bg-gray-200 overflow-hidden w-full" style="aspect-ratio: 1">
			<img
				class="duration-500 transform group-hover:scale-105"
				:src="cover"
			/>
		</div>
		<div class="border-t border-gray-200 flex items-center p-4 space-x-4">
			<div class="flex flex-1 flex-col w-full">
				<span class="font-medium text-lg">
					{{ title }}
				</span>
				<span class="text-sm text-gray-600">
					{{ artist }}
				</span>
			</div>
			<button class="icon-btn btn-text-gray">
				<div class="i-lucide-download" />
			</button>
		</div>
	</ui-card>
</template>
