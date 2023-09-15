// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}

		interface PageData {
			menu: Documentation.Menu[]
		}

		// interface Platform {}
	}

	namespace Documentation {
		type Glob = {
			metadata: {
				order?: number
				title: string
			}
		}

		type Page = Glob & {
			slug: string
			metadata: {
				file?: string
				showSchema?: boolean
				images?: string[]
			}
		}

		type Menu = Glob & {
			dir: string
			entries: Page[]
		}
	}

	namespace Shopify {
		interface SectionSchema {
			name: string
			tag?: string
			class?: string
			settings: SectionSchemaSetting[]
			blocks?: {
				type: string
				name: string
				settings: SectionSchemaSetting[]
			}[]
			disabled_on?: any
			enabled_on?: any
			presets?: any
		}

		interface SectionSchemaSetting {
			type: string
			content?: string
			id: string
			label: string
			options?: {
				value: string
				label: string
			}[]
			min?: number
			max?: number
			info?: string
			default?: string
		}
	}
}

export {}
