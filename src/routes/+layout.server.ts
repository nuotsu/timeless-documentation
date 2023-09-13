import type { LayoutServerLoad } from './$types'
import generateMenu from '$lib/generateMenu'

export const load: LayoutServerLoad = async () => {
	return {
		menu: generateMenu(),
	}
}
