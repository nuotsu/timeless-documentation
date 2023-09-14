import { defineMDSveXConfig } from 'mdsvex'
import rewrite from 'rehype-rewrite'
import slugify from 'slugify'

export default defineMDSveXConfig({
	extensions: ['.md'],

	rehypePlugins: [
		[rewrite, {
			rewrite: (node) => {
				if (node.tagName?.match(/^h\d$/)) {
					node.properties.id = slug(extractNodeText(node))
				}
			}
		}],
	]
})

const slug = str => slugify(str, { lower: true })

function extractNodeText(node) {
	return node.children?.reduce((acc, cur) => {
		if (cur.type === 'text') return acc + cur.value
		if (cur.children) return acc + extractNodeText(cur)
		return acc + cur.value
	}, '')
}
