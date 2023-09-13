import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob('../../../docs/**/*.md')
	const doc = await modules[`../../../docs/${ params.slug }.md`]() as any

	if (doc) return {
		component: doc.default,
		metadata: doc.metadata as Documentation.Page['metadata'],
	}

	throw error(404, 'Not found')
}
