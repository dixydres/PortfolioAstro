export default function getAssetPath(path: string): string {
    // If the path already starts with /Portfolio/, return it as is
    if (path.startsWith('/Portfolio/')) {
        return path;
    }

    // If the path starts with http:// or https://, it's an external URL
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    // Otherwise, add the /Portfolio/ prefix
    return path.startsWith('/')
        ? `/Portfolio${path}`
        : `/Portfolio/${path}`;
}
