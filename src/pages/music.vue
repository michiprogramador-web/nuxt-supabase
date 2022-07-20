<script setup lang="ts">
import data from '~/data.json'

const albums = data.albums as Album[]

useHead({
	title: 'Music',
})
</script>

<template>
	<div class="flex flex-col space-y-8">
		<h1 class="text-4xl">Music</h1>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
		>
			<album v-for="album in albums" :key="album.id" v-bind="album" />
		</div>
	</div>
</template>
