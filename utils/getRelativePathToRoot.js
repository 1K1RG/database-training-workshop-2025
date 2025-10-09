import { buildPath } from '../settings/blog.js';

export const getRelativePathToRoot = () => {
    if (!buildPath) return './'; // default for files in the root
    
    const pathParts = buildPath.replace(/^\//, '').replace(/\/$/, '').split('/');
    const directoryDepth = pathParts.filter(part => part).length;
    
    return '../'.repeat(directoryDepth);
};