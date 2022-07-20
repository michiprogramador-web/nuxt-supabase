import { defineNuxtConfig } from 'nuxt'
import unocss from './unocss.config'

export default defineNuxtConfig({
	css: ['@unocss/reset/tailwind.css', '~/assets/css/globals.css'],
	modules: ['@unocss/nuxt', '@pinia/nuxt', '@vueuse/nuxt'],
	srcDir: 'src',
	unocss,
})
