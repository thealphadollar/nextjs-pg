---
title: 'Two Form of Pre-rendering'
date: '2022-09-04'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Generation**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the rendering method that fetches the data at the build time and then build and stores a static HTML file to be served to each client, without building it again.
- **Server-side Generation** is the rendering method that fetches the data for each client's request, build the HTML page by filling the data, and then return the HTML to the client. This method is slower but useful for frequently updated data.

Importantly, we can choose different type of rendering for each of the page in Next.js by implying particular methods. Hence, rendering is hybrid in Next.js