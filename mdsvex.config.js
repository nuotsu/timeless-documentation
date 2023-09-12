import { defineMDSveXConfig } from 'mdsvex'

export default defineMDSveXConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [],
	rehypePlugins: [],
})
