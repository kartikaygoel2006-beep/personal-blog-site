<script>
	export let data;

	import PostGrid from '$lib/blogs/PostGrid.svelte';
	import CategoriesGrid from '$lib/blogs/CategoriesGrid.svelte';
	import FeaturedCarrousel from '$lib/blogs/FeaturedCarrousel.svelte';
	import { lighten } from '$lib/blogs/utils.js';

	let featuredPosts = data.blogs.filter((blog) => blog.featured === true).slice(0, 1);
	let latestPosts = data.blogs.filter((blog) => !featuredPosts.find((fp) => fp.title === blog.title));

	featuredPosts.forEach((post) => {
		post.coverImage = post.coverImage + '?w=1000&fm=webp';
		post.color = lighten(post.avgColor, 0.75);
	});

	latestPosts.forEach((post) => {
		post.coverImage = post.coverImage + '?w=400&fm=webp';
	});

	data.categories.forEach((category) => {
		category.coverImage = category.image.asset.url + '?w=200&fm=webp';
		category.placeholderImage = category.image.asset.metadata.lqip;
	});
</script>

{#if data.blogs.length === 0}
	<section class="empty">
		<h2>No posts yet</h2>
		<p>I haven't published anything here yet. Check back soon!</p>
	</section>
{:else}
	<section class="featured">
		<FeaturedCarrousel posts={featuredPosts} />
	</section>

	{#if data.categories.length}
		<section class="categories">
			<h2 class="highlight" id="categories-browse">Browse categories</h2>
			<a href="/blogs/explore">View all</a>
			<CategoriesGrid categories={data.categories} />
		</section>
	{/if}

	<section class="latest">
		<h2 id="latest-articles" class="highlight">Latest Posts</h2>
		<PostGrid posts={latestPosts} />
	</section>
{/if}

<style lang="scss">
	.empty {
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1rem;

		h2 {
			font-size: 1.6rem;
			color: $clr-fg-2;
			font-weight: 600;
		}

		p {
			opacity: 0.8;
		}
	}

	.categories {
		position: relative;
		width: 100%;
		height: 100%;

		a {
			display: none;
		}
	}

	.latest h2,
	.categories h2 {
		font-size: 1.5rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
		color: $clr-fg-2;
		font-weight: 600;
	}

	.categories h2 {
		margin-top: 0rem;
	}

	// Tablet and smaller devices
	@media screen and (max-width: $tablet) {
		h2 {
			font-size: 1.3rem;
			color: $clr-fg-2;
			font-weight: 400;
		}
	}

	// Mobile
	@media only screen and (max-width: $mobile) {
		.categories a {
			position: absolute;
			display: inline;
			right: 0;
			color: $accent-0;
		}
	}
</style>
