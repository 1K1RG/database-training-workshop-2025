> This repository was created from a template for a static blog website.

## Development

1. Run `npm install`
2. Run `npm run dev`

## Creating a post

Markdown file name format is `YYYY-MM-DD_the-blog-post-path.md` with the date being the date for publishing the post.

If you want to schedule a post for a future date, use the future date and the post won't go live until you build the site on that date or after (it will get built on your dev build so that you check how it looks etc - if you want to see how the site will look in production without future posts run `npm run build` instead).

The YAML format is as follows (don't include any markdown in your YAML data)

```
---
title: This is the blog post in title
description: This is a description about the blog post. It will be the introductory paragraph used in search results, on blog list pages, and at the top of the blog post. It's pretty important.
image: https://images.adomain.com/blog/your-image.jpg // (optional) This is optional and will be a URL to an image you would like to be used when sharing the post on socials (goes in the schema and header data)
categoryId: product-x // (optional)
authorId: codemzy // (optional)
published: YYYY-MM-DD // ISO Format include the time also if you want to '2021-10-01T14.30
updated: YYYY-MM-DD // (optional) include an updated date here if you are updating an old post
---

## Now we can use markdown

Let's write a blog post...

```

If you want schedule and update a post, don't alter the orginal file. Use the same blog post path as the original post, and change the date to the date for the scheduled update (you will have two files, one with the orginal post that stays live and one with the updated post which will go live once the date is reached and replace the orginal post).

## Deploy

Run `npm run build`. Output will be in the `/dist` directory.
