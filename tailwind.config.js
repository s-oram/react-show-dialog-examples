import plugin from 'tailwindcss/plugin.js'

// Use the debug-X classes to highlight the bounds of a element.
const debugPlugin = plugin(({ addUtilities }) => {
	addUtilities({
		'.debug-1': {
			border: '2px solid red !important',
		},
		'.debug-2': {
			border: '2px solid purple !important',
		},
		'.debug-3': {
			border: '2px solid blue !important',
		},
		'.debug-4': {
			border: '2px solid green !important',
		},
		'.debug-5': {
			border: '2px solid yellow !important',
		},
	})
})

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [debugPlugin],
}
