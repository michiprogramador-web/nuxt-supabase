import { UnocssNuxtOptions } from '@unocss/nuxt'
import { colors } from '@unocss/preset-mini'

export default {
	icons: {
		scale: 1.5,
	},
	shortcuts: [
		{
			btn: 'duration-100 flex font-medium items-center justify-center px-4 py-2.5 rounded-lg space-x-2 text-sm tracking-wide w-min whitespace-nowrap',
			'icon-btn': 'duration-100 flex p-2 rounded-lg',
			'btn-secondary':
				'hover:bg-gray-200/25 active:bg-gray-200/50 border border-gray-200 shadow-sm shadow-gray-200/50',
			'text-link':
				'duration-100 text-primary-600 hover:text-primary-700 active:text-primary-800 font-medium',
			'text-secondary': 'text-gray-600',
		},
		[
			/^btn-solid-(.*)$/,
			([, c]) =>
				`bg-${c}-600 hover:bg-${c}-700 active:bg-${c}-800 text-white shadow`,
		],
		[
			/^btn-text-(.*)$/,
			([, c]) =>
				`hover:(bg-${c}-600/5 text-${c}-700) active:(bg-${c}-600/10 text-${c}-800) text-${c}-600`,
		],
		[/^alert-(.*)$/, ([, c]) => `bg-${c}-600/10 text-${c}-600`],
	],
	theme: {
		colors: {
			primary: colors.indigo,
			gray: colors.slate,
			error: colors.red,
			success: colors.green,
			warning: colors.orange,
			info: colors.sky,
		},
		fontFamily: {
			sans: ['Lexend', 'sans-serif'],
		},
	},
} as UnocssNuxtOptions
