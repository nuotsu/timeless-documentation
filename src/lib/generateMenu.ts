import { parse } from 'path'

const menu = Object.entries(import.meta.glob<Documentation.Glob>('/src/docs/**/index.md', { eager: true }))
	.map(([path, { metadata }]) => ({
		dir: getDir(path),
		metadata,
		entries: []
	}) as Documentation.Menu)

const docs = Object.entries(import.meta.glob<Documentation.Glob>(['/src/docs/**/*.md', '!/src/docs/**/index.md'], { eager: true }))

for (const [path, { metadata }] of docs) {
	const index = menu.findIndex(({ dir }) => dir === getDir(path))
	menu[index].entries.push({
		slug: parse(path).name,
		metadata
	})
}

function getDir(path: string): string {
	return parse(path).dir.replace(/^\/src/, '')
}

export default () => menu.sort((a, b) => Number(a.metadata.order) - Number(b.metadata.order))
