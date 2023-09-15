import { Octokit } from 'octokit'
import { PUBLIC_GITHUB_TOKEN } from '$env/static/public'

const octokit = new Octokit({
	auth: PUBLIC_GITHUB_TOKEN
})

export default async (file?: string) => {
	if (!file) return null

	const content = await octokit.rest.repos.getContent({
		owner: 'nuotsu',
		repo: 'timeless-shopify-theme',
		path: file,
		mediaType: { format: 'raw' },
		headers: {
			accept: 'application/json'
		}
	})

	if (content.status !== 200) return null

	const contents = atob((content.data as any).content)
		.replace(/[\n\t]/g, '')

	const { schema = '{}' } = /\{% schema %\}(?<schema>.+)\{% endschema %\}/.exec(contents)?.groups || {}

	return JSON.parse(schema) as Shopify.SectionSchema
}
