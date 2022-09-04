---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2022-09-05'
---

Next.js recommends using **static generation** (with and without data) whenever possible so that the page can be rendered once and then this static content can be served using CDN, or any other edge method much faster than building it each time on the server.

Static generation is particularly useful for:
- Marketing pages
- Blog posts
- E-commerce product listings
- SEO critical pages
- Documentation

Asking yourself, *Can I pre-render this page ahead of time?* is the way to make the decision between static generation and server-side rendering.

When is Static generation not a good idea? Mostly when the page to be rendered requires updates from a frequently changing data source and we want to present the latest data to the client. 

Server-side rendering is slower as it needs to be rendered each time a request comes in, however helps serve up to date information.