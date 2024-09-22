/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				background: '#FFFFFE',
				primary: '#014B41',
				text1: '#2E2E2E',
				text2: '#252525',
				button: '#006859',
				buttontext: '#FDF3D0'
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '3rem',
					xl: '4rem',
					'2xl': '10rem',
				}
			}
		},
	},
	plugins: [require('flowbite/plugin')],
}
