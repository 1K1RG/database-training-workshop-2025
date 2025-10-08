import React from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';

const renderer = {
    blockquote(tokens) {
        let match = tokens.text.match?.(/(?<quote>[\w\W]+)?-- (?<caption>[^-]+)(?:- (?<cite>.*))?$/m);
        if (match && match.groups) {
            const quoteText = match.groups.quote.trim();
            const caption = match.groups.caption.trim();
            const cite = match.groups.cite?.trim();
            
            return `<figure><blockquote><p>${quoteText}</p></blockquote><figcaption>- ${caption}${cite ? ` <cite>${cite}</cite>` : ''}</figcaption></figure>`;
        }
        return false; // return default if no caption
    },
    code(tokens) {
        if (tokens.lang) {
            return `<pre><code class="language-${tokens.lang}">${Prism.highlight(tokens.text, Prism.languages[tokens.lang], tokens.lang)}</code></pre>`;
        }
        return false; // or return default
    },
    link(tokens) {
        // add target blank to external links
        if (tokens.href.match?.(/http/gi)) {
            return `<a href="${tokens.href}" target="_blank" rel="noopener">${tokens.text}</a>`;
        }
        return false; // or return default
    },
};

marked.use({ renderer });

function Markdown({ type = 'div', children, ...props}) {

    // creates the markup
    const convertMarkdown = function(raw) {
        return { __html: marked.parse(raw, { async: false }) };
    }

    // sets the markup inside an element
    return React.createElement(type, {dangerouslySetInnerHTML: convertMarkdown(children), ...props}, null);
};

export default Markdown;