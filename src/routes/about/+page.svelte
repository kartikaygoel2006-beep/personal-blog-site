<main>
	<h1>ABOUT</h1>
	<hr />
	<img src="/img/favicon/logo-rounded.png" alt="KG logo" width="150" height="150" />
	<p>Hey there!</p>
	<p>
		I'm Kartikay Goel, a computer science student who likes learning by building things. This site is my little corner of
		the internet, where I'll share the projects I work on and notes on what I'm learning along the way.
	</p>
	<p>
		It's still a work in progress, so expect a few rough edges while I fill it in. If you'd like to say hi, drop a message on
		the <a href="/contact">contact page</a>.
	</p>
	<p>Thanks for stopping by 👋</p>
	<p>— Kartikay</p>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		height: 100%;
		max-width: 800px;
	}

	@font-face {
		font-family: 'Monument Extended';
		src: url('/fonts/Monument/MonumentExtended-Regular.woff2') format('woff2'), url('/fonts/Monument/MonumentExtended-Regular.woff') format('woff');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 3rem;
		text-align: center;
		font-family: 'Monument Extended', sans-serif !important;
		width: 100%;
		display: block;
		color: hsl(170, 36%, 55%);
	}

	hr {
		border-color: #223b39;
		margin-block: 2rem;
		width: 100%;
	}

	img {
		float: right;
		margin: 0 1.5rem 1.5rem 1.5rem;
		border-radius: 3rem;
		@media screen and (max-width: $tablet) {
			float: none;
			border-radius: 1rem;
			margin-inline: auto;
		}
	}

	s {
		text-decoration: line-through wavy;
		text-decoration-color: $accent-05;
	}

	p {
		display: block;
		font-size: 1.25rem;
		margin-bottom: 1.6rem;
		hyphens: auto;
		color: $clr-fg-4;
		filter: brightness(1.1);
		line-height: 1.5;
		font-family: 'Larsseit', $body-font, sans-serif;
		span {
			color: $clr-fg-450;
		}
	}

	p {
		font-size: 19px;
		font-family: $body-font;

		@media screen and (max-width: $tablet) {
			font-size: 17px;
		}
	}
</style>
