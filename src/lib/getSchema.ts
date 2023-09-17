import { Octokit } from 'octokit'
import { PUBLIC_GITHUB_TOKEN } from '$env/static/public'

const octokit = new Octokit({
	auth: PUBLIC_GITHUB_TOKEN
})

async function getContent(file?: string) {
	if (!file) return

	const content = await octokit.rest.repos.getContent({
		owner: 'nuotsu',
		repo: 'timeless-shopify-theme',
		path: file,
		mediaType: { format: 'raw' },
		headers: {
			accept: 'application/json'
		}
	})

	if (content.status !== 200) return

	return atob((content.data as any).content).replace(/[\n\t]/g, '')
}

export async function getSectionSchema(file?: string) {
	const contents = await getContent(file) || ''

	const { schema = '{}' } = /\{% schema %\}(?<schema>.+)\{% endschema %\}/.exec(contents)?.groups ?? {}

	return JSON.parse(schema) as Shopify.Schema
}

export async function getSettingSchema(file?: string) {
	const contents = await getContent(file) || ''

	return JSON.parse(contents) as Shopify.Schema[]
}
