module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			body: "'Rubik', sans-serif",
			display: "'Rubik', sans-serif",
			sans: "'Rubik', sans-serif",
			serif: "'Rubik', sans-serif",
		},
	},
	variants: {
		extend: {
			filter: ["hover", "focus"],
		},
	},
	plugins: [],
};
