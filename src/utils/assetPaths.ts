export const BASE_PATH = '/Portfolio';

export function getAssetPath(path: string): string {
    if (!path) return '';

    // External URLs or special protocols
    if (path.startsWith('http://') ||
        path.startsWith('https://') ||
        path.startsWith('data:') ||
        path.startsWith('blob:') ||
        path.startsWith('mailto:') ||
        path.startsWith('#')) {
        return path;
    }

    // Clean up the path
    let cleanPath = path;

    // Remove duplicate slashes
    cleanPath = cleanPath.replace(/\/+/g, '/');

    // Remove duplicate Portfolio prefixes
    while (cleanPath.includes(`${BASE_PATH}${BASE_PATH}`)) {
        cleanPath = cleanPath.replace(`${BASE_PATH}${BASE_PATH}`, BASE_PATH);
    }

    // Remove trailing slashes
    cleanPath = cleanPath.replace(/\/+$/, '');

    // Ensure correct Portfolio prefix
    if (!cleanPath.startsWith(BASE_PATH)) {
        cleanPath = cleanPath.startsWith('/')
            ? `${BASE_PATH}${cleanPath}`
            : `${BASE_PATH}/${cleanPath}`;
    }

    // Final cleanup of any double slashes
    cleanPath = cleanPath.replace(/\/+/g, '/');

    return cleanPath;
}

export function getPagePath(path: string): string {
    return getAssetPath(path);
}

export function getPublicPath(filename: string): string {
    return getAssetPath(`/public/${filename}`);
}

export function replaceAssetPathsInHTML(content: string): string {
    const urlPattern = /(?<=(?:src="|href="|url\()['"]?)([^'")\s]+)(?=['"]?\))/g;
    return content.replace(urlPattern, (match) => getAssetPath(match));
}
