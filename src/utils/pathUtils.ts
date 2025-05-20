export const BASE_PATH = '/Portfolio';

export function normalizePathForGithubPages(path: string): string {
    if (!path) return path;

    // If it's an external URL or data URL, return as is
    if (path.startsWith('http://') ||
        path.startsWith('https://') ||
        path.startsWith('data:') ||
        path.startsWith('blob:')) {
        return path;
    }

    // Remove any duplicate Portfolio prefixes
    while (path.includes(`${BASE_PATH}/${BASE_PATH}`)) {
        path = path.replace(`${BASE_PATH}/${BASE_PATH}`, BASE_PATH);
    }

    // Clean up multiple forward slashes
    path = path.replace(/\/+/g, '/');

    // Ensure the path starts with BASE_PATH
    if (!path.startsWith(BASE_PATH)) {
        path = path.startsWith('/') ? `${BASE_PATH}${path}` : `${BASE_PATH}/${path}`;
    }

    return path;
}

export function getPublicAssetPath(filename: string): string {
    return normalizePathForGithubPages(`/public/${filename}`);
}

export function getAssetPath(path: string): string {
    return normalizePathForGithubPages(path);
}

export function getPagePath(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return normalizePathForGithubPages(cleanPath);
}
