export const getRelativePathToRoot = (urlPath) => {
    if (!urlPath) return '../'; // default for files in blogPath directory
    
    const pathParts = urlPath.replace(/^\//, '').split('/');
    let directoryDepth = pathParts.length - 1;

    // 'index' doesn't add depth
    if (pathParts[pathParts.length - 1] === 'index') {
        directoryDepth = pathParts.length - 1;
    }
    
    return '../'.repeat(directoryDepth);
};