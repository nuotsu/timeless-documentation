import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import getSectionSchema from '$lib/getSectionSchema'

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob('../../../docs/**/*.md')
	const doc = await modules[`../../../docs/${ params.slug }.md`]() as {
		default: any
		metadata: Documentation.Page['metadata']
	}

	if (!doc) throw error(404, 'Not found')

	return {
		component: doc.default,
		metadata: doc.metadata,

		sectionSchema: doc.metadata.showSchema
			? getSectionSchema(doc.metadata.file)
			: null
	}
}
