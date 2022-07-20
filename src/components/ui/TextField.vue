<script setup lang="ts">
import { v4 as uuid } from 'uuid'

const id = uuid()

withDefaults(
	defineProps<{ modelValue: string; label: string; type?: string }>(),
	{
		type: 'text',
	}
)
defineEmits(['update:modelValue'])

const show = ref(false)
</script>

<template>
	<div class="flex flex-col space-y-2">
		<label class="text-sm" :for="id">{{ label }}</label>
		<div class="relative">
			<input
				class="bg-gray-200 px-4 py-2.5 rounded-lg w-full"
				:class="{ 'pr-12': type === 'password' }"
				:id="id"
				:value="modelValue"
				@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
				:type="
					type === 'password' ? (show ? 'text' : 'password') : type
				"
				:placeholder="label"
			/>
			<div
				v-if="type === 'password'"
				@click="show = !show"
				class="flex p-2 -mx-2 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-lg"
			>
				<div
					class="duration-100"
					:class="show ? 'i-lucide-eye' : 'i-lucide-eye-off'"
				/>
			</div>
		</div>
	</div>
</template>
