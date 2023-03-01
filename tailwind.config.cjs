const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/forms')],

	theme: {
		fontFamily: {
			sans: ['habibi', 'sans-serif'],
			serif: ['habibi', 'serif']
		},
		extend: {
			fontFamily: {
				habibi: ['Habibi']
			}
		}
	},

	plugins: []
};

module.exports = config;
