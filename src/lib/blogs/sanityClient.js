import sanityClient from '@sanity/client';
import { env } from '$env/dynamic/public';

// Blog posts are loaded from a Sanity CMS project.
// By default this is the original project the site was forked with, so its existing posts show.
// To use your own posts instead, set PUBLIC_SANITY_PROJECT_ID (Netlify → Project configuration → Environment variables).
const projectId = env.PUBLIC_SANITY_PROJECT_ID || 'u62jjaxi';

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
