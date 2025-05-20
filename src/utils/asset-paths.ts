export function getPublicPath(path: string): string {
    // If it's an absolute URL, return as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    // If it already has the /Portfolio prefix, return as is
    if (path.startsWith('/Portfolio/')) {
        return path;
    }

    // Otherwise, add the /Portfolio prefix
    return path.startsWith('/') ? `/Portfolio${path}` : `/Portfolio/${path}`;
}

export function replaceAssetPaths(content: string): string {
    // Replace all asset paths that don't start with /Portfolio/ or http
    return content.replace(
        /(?<=src="|href="|url\()(['"]?)\/(?!Portfolio\/|http)([^'")\s]+)(['"]?)/g,
        '$1/Portfolio/$2$3'
    );
}
