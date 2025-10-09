import React from 'react';
import { blogDomain, blogName, blogDescription, metaDescription, blogLogoURL, blogTwitter } from '../settings/blog';
import { getRelativePathToRoot } from '../utils/getRelativePathToRoot';
// components
import Nav from './Nav';
import Footer from './Footer';

// main component
function Main({ title, description, ...props }) {
    const relativePath = getRelativePathToRoot(props.path);
    
    return (
        <html lang="en">
            <head>
                <title>{ title ? `${title} - ${blogName}` : blogName }</title>
                <meta charSet="utf-8" />
                <meta name="description" content={ description || metaDescription || blogDescription } />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link href={`${relativePath}css/styles.min.css`} rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link rel='shortcut icon' type='image/x-icon' href={`${relativePath}favicon.ico`} />
                <script src={`${relativePath}js/darkmode.min.js`}></script>
                { props.path && <link rel="canonical" href={blogDomain + props.path} /> }
                { props.image ? <meta name="twitter:card" content="summary_large_image" /> : <meta name="twitter:card" content="summary" /> }
                { blogTwitter && <meta name="twitter:site" content={blogTwitter} /> }
                { props.path && <meta property="og:url" content={blogDomain + props.path} /> }
                <meta property="og:title" content={title || blogName} />
                { description && <meta property="og:description" content={description} /> }
                { props.image ? <meta property="og:image" content={props.image} /> : blogLogoURL && <meta property="og:image" content={blogLogoURL} /> }
                { props.head }
            </head>
            <body className="flex flex-col min-h-screen text-gray-900 dark:bg-gray-900 dark:text-gray-200">
                <Nav path={props.path} />
                { props.children }
                <Footer path={props.path} />
                {
                    // uncomment this to add your custom javascript 
                    // <script src="/js/index.min.js" async></script>
                }
            </body>
        </html>
    );
};

export default Main;