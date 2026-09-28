# Personal Blog

Personal blog built with SvelteKit and Sanity CMS.

![preview-1](https://cdn.sanity.io/images/81pocpw8/production/70adf22788618147eb2749bb23f47b611602194d-1442x744.jpg?w=1442&q=75&fit=clip&auto=format)

![preview-2](https://cdn.sanity.io/images/81pocpw8/production/d537d3685e66acbb7648b908ff879a814121a839-1423x781.jpg?w=1423&h=781&fit=clip&auto=format)

## ℹ️ Note

> This project was originally written by me over ~5 months under my previous usernames (`atpyrix`, `pyrix`, `NotYasho`). I deleted that GitHub account in 2025 (at that time, the repo for this project had ~100 stars) and lost my local copies. This repo was restored from [a public fork](https://github.com/thepiratehub/pyrix-blog-). Original commit history isn't preserved here. Authorship can be verified in the fork.

> The original deployment on Netlify and its Sanity project are inaccessible to me, so the live site is frozen and I can't publish to it. The code here is self-contained.



## Features


- **Responsive layout**: sidebar nav on desktop, bottom tab bar on mobile, auto-hiding header. For the UI itself, I took inspiration from many other sites to come up with this.

- **Featured post** on the blog home + a 'latest-posts' grid and a "browse categories" strip

- **Categories** with per-category colour, icon, and cover image, and an explore page for each

- **Search** across title, description, and tags via GROQ `match`

- **Save for later**, stored in `localStorage`, with its own 'saved-posts' page

- **Markdown rendering** with `marked` and `highlight.js` (line numbers, copy button, language label, custom headings, links, images, `^sup^`, `~sub~`, `==mark==`, `++ins++`)

- **Contact form** submitting to Formspree, with inline validation

- **Dynamic sitemap** at `/sitemap.xml` generated from Sanity content

- **Other Small features** such as a Reading progress bar and estimated read time per article, Share button using the Web Share API, with clipboard fallback and toast, Low-quality image placeholders (Sanity LQIP) with lazy loading

## Structure

```
src/                    Frontend
├── lib
├── routes
│   ├── about
│   ├── article
│   ├── blogs
│   │   ├── explore
│   │   ├── saved
│   │   └── search
│   ├── contact
│   └── sitemap.xml
└── styles
studio/                 Sanity Studio (schemas: blog, category)
```


## Content model

**blog**: `title`, `description`, `category` (ref), `slug`, `featuredImage` (with `source`), `body` (markdown), `tags[]`, `date`, `featured`

**category**: `name`, `color` (`"r, g, b"`), `image`, `icon` (Iconify name, e.g. `bx:code-alt`)


## Tech stack


[![SvelteKit](https://img.shields.io/badge/-SvelteKit-black?style=for-the-badge&logo=svelte&color=orangered&logoColor=white)](https://kit.svelte.dev/)
[![SASS](https://img.shields.io/badge/-SASS-black?style=for-the-badge&logo=sass&color=cc6699&logoColor=white)](https://sass-lang.com/)
[![Netlify](https://img.shields.io/badge/-Netlify-black?style=for-the-badge&logo=netlify&color=262626&logoColor=b)](https://www.netlify.com/)
[![Sanity](https://img.shields.io/badge/-Sanity.io-black?style=for-the-badge&logo=sanity&color=orange&logoColor=white)](https://www.sanity.io/)



## License


[MPL 2.0](LICENSE)


<p align="center">
  <a href="https://notyasho.netlify.app/blogs">
    <img src="https://user-images.githubusercontent.com/90166733/229889532-31b3f627-d0b8-4194-bd91-48293c667793.png" alt="image">
  </a>
</p>