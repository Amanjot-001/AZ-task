/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'primary-gradient': "linear-gradient(180deg, #FFFFFF 0%, #F1FBFF 100%)",
				'secondary-gradient': "linear-gradient(180deg, #EFF5FF 0%, rgba(239, 245, 255, 0) 100%)",
			},
			colors: {
				secondary_bg: "#FFFFFF",
				light_bg: "#EFF5FF",
				primary_font: "#17384D",
				primary_border: "#A4E6FF",
			},
			fontFamily: {
				'dm-sans': ['"DM Sans"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

