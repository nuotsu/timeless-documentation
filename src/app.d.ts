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
			}
		}

		type Menu = Glob & {
			dir: string
			entries: Page[]
		}
	}
}

export {}
