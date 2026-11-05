import sanityClient from '@sanity/client';
import { env } from '$env/dynamic/public';

// Blog posts are loaded from a Sanity CMS project.
// To show your own posts, create a project at https://www.sanity.io and set its ID
// as the PUBLIC_SANITY_PROJECT_ID environment variable (Netlify → Project configuration → Environment variables).
// Until then the blog simply shows no posts.
const projectId = env.PUBLIC_SANITY_PROJECT_ID;

const emptyClient = {
	// Queries ending in [0] ask for a single document; everything else asks for a list.
	fetch: async (query) => (/\]\s*\[0\]/.test(query) ? null : [])
};

const client = projectId
	? sanityClient({
			projectId,
			dataset: 'production',
			apiVersion: '2023-01-05',
			useCdn: false
	  })
	: emptyClient;

export default client;
