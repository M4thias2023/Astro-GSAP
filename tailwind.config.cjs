/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'section1':"linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.30) 100%),url('/section1.avif')",
				'section2':"linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.01) 100%),url('/section2.avif')",
			},
			fontSize: {
				'clamp': "clamp(70px,100px,200px)"
			},
			textColor:{
				'primary': '#FFFCE1',
			}
		},
	},
	plugins: [],
}
