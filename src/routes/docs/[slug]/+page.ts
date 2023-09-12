import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const doc = await import(`../../../docs/${ params.slug }.md`)

	if (doc) return {
		test: 'poop',
		component: doc.default,
		metadata: doc.metadata,
	}

	throw error(404, 'Not found')
}
