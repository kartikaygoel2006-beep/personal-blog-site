import { error } from '@sveltejs/kit';
import client from '$lib/blogs/sanityClient';

export async function load({ params }) {
  const data = await client.fetch(`*[_type=="blog" && slug.current == '${params.slug}'][0]{
    ...,
    category->{
      name,
      icon,
      color
    },
		featuredImage{
			asset->{
				...,
				metadata
			}
		}
  }`);

  if (data) {
    return {
      blogs: data
    };
  }
  throw error(404, 'Post not found');
}