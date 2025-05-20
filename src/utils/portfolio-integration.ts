import type { AstroIntegration } from 'astro';
import { replaceAssetPaths } from './asset-paths';

export default function portfolioIntegration(): AstroIntegration {
    return {
        name: 'portfolio-integration',
        hooks: {
            'astro:config:setup': ({ updateConfig }) => {
                updateConfig({
                    vite: {
                        build: {
                            rollupOptions: {
                                output: {
                                    assetFileNames: 'assets/[name][extname]',
                                },
                            },
                        },
                    },
                });
            },
            'astro:build:done': ({ pages }) => {
                // Process all built pages to ensure asset paths are correct
                pages.forEach(page => {
                    if (page.pathname.endsWith('.html')) {
                        const content = page.content.toString();
                        const processedContent = replaceAssetPaths(content);
                        page.content = Buffer.from(processedContent);
                    }
                });
            },
        },
    };
}
