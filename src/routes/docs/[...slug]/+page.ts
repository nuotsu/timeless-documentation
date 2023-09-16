import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import getSchema from '$lib/getSchema'

export const load: PageLoad = async ({ params }) => {
	const slug =
		params.slug === '' ? 'index' :
		params.slug === 'sections' ? 'sections/index' :
		params.slug

	const modules = import.meta.glob('../../../docs/**/*.md')
	const doc = await modules[`../../../docs/${ slug }.md`]() as {
		default: any
		metadata: Documentation.Page['metadata']
	}

	if (!doc) throw error(404, 'Not found')

	return {
		component: doc.default,
		metadata: doc.metadata,

		sectionSchema: doc.metadata.showSchema
			? getSchema(doc.metadata.file, slug.includes('sections'))
			: null
	}
}
