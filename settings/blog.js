// this is the root domain or subdomain that the live blog will be hosted on
// this info is needed for the LD-JSON post data and the RSS feed
// e.g. "https://www.yourdomain.com" or "https://blog.yourdomain.com"
export const blogDomain = "https://1k1rg.github.io";

// blog location - use "" for no subdirectory or "/blog" for blog subdirectory
// personally I prefer to use the "/blog" subdirectory so that I can have other stuff on the site
// and then blog posts are like www.yoursite.com/blog/post-name rather than www.yoursite.com/post-name
// but if your whole site is a blog primarily you might want to leave this as "" and have the index page as the blog landing page
// post urls will be www.theblogsite.com/post-name or if you are hosting on subdomain like blog.yoursite.com/post-name
// if you do use "/blog" make sure you create a custom index page and wire it up in build/pages
export const blogPath = process.env.NODE_ENV === "development" ? "" : "/database-training-workshop-2025";
// For GitHub Pages deployment, we need the repository path in URLs but not in build paths

// buildPath is different to blogPath if you are hosting the blog GitHub Pages since GitHub Pages hosts the site on a subdirectory the same as the repository name
export const buildPath = "";

// this could be the business, website or the person
export const blogBy = "1k1RG Project";

// The name of the blog
export const blogName = "1k1RG Database Training Workshop 2025";

// url for a logo (this is used in the article ld json)
export const blogLogoURL = false;

// Description for visitors to the blog (you can use markup)
export const blogDescription = "The ***4-Day Database Training Workshop*** is designed to build technical capacity among researchers and developers for **Activity 5: Implementation of the Philippine Rice Genome Database (PH Rice GDB)** under the **1k1 Rice Genome Project**. This training integrates foundational database concepts, system architectures, and practical data handling workflows relevant to genomic information management."

// Description that will display in search engines (use plain text only)
// This is optional, but if you used markup in your description, include a plain text description here for SEO
export const metaDescription = `The 1k1RG Database Training Workshop is designed to build technical capacity among researchers and developers for Activity 5: Implementation of the Philippine Rice Genome Database (PH Rice GDB) under the 1k1 Rice Genome Project. This training integrates foundational database concepts, system architectures, and practical data handling workflows relevant to genomic information management.`;

// The number of posts per page (e.g. on the blog and category pages)
export const blogPagesLength = 10;

// The main twitter handle for the blog site (used for attribution in social sharing) e.g. @yourtwitter
export const blogTwitter = "";

// This image will be used on social shares if you didn't give a post an image
// e.g. https://images.domain.com/blog/default.jpg
export const defaultSocialImage = "";