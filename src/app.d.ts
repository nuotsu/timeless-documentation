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
		interface Schema {
			name: string
			tag?: string
			class?: string
			settings: SchemaSetting[]
			blocks?: {
				type: string
				name: string
				settings: SchemaSetting[]
			}[]
			disabled_on?: any
			enabled_on?: any
			presets?: any
			definition?: SchemaSetting[]
			role?: Record<string, string>
		}

		interface SchemaSetting {
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
