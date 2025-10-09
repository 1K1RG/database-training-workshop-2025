import React from 'react';
import format from 'date-fns/format';
import { getRelativePathToRoot } from '../../utils/getRelativePathToRoot';
// settings
import { blogPath, defaultSocialImage } from '../../settings/blog';
import categories from '../../settings/categories';
// components
import Main from '../Main';
import Markdown from './Markdown';
import PostData from './PostData';
// utils
import { createAuthorLink } from './List';
// svg
import { ChevronRight } from '../svg/Icons';

// blog post component
function Post(props) {
    const relativePath = getRelativePathToRoot(props.path);

    return (
        <Main {...props} image={props.image || defaultSocialImage} head={<React.Fragment><link href={`${relativePath}css/prism.min.css`} rel="stylesheet" /><PostData {...props} /></React.Fragment>}>
            <div className="p-5">
                <div className="max-w-3xl mx-auto my-10">
                    <p className="py-5 flex items-center font-semibold text-lg md:text-xl">
                        { props.categoryId ? <ChevronRight width="20" height="20" /> : null }
                        { props.categoryId ? <a href={`${blogPath}/${props.categoryId}`}>{categories[props.categoryId].name}</a> : null }
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">{props.title}</h1>
                    <p className="md:text-lg py-10 prose dark:prose-dark">{createAuthorLink(props.authorId)} on {format(props.updated || props.published, 'MMMM do, yyyy')}</p>
                </div>
                <div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg lg:text-xl font-semibold">{props.description}</p>
                        <Markdown className="prose lg:prose-lg dark:prose-dark max-w-none my-10" type="article">{props.content}</Markdown>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Post;