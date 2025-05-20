import type { AstroIntegration } from 'astro';

export function portfolioAssetPaths(): AstroIntegration {
    return {
        name: 'portfolio-asset-paths',
        hooks: {
            'astro:config:setup': ({ updateConfig }) => {
                updateConfig({
                    vite: {
                        base: '/Portfolio/',
                        build: {
                            cssCodeSplit: true,
                            rollupOptions: {
                                output: {
                                    assetFileNames: (assetInfo) => {
                                        const info = assetInfo?.name ?? '';
                                        const extType = info.split('.').at(1);
                                        if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                                            return `assets/img/[name][extname]`;
                                        }
                                        return `assets/${extType || 'misc'}/[name][extname]`;
                                    },
                                    chunkFileNames: 'assets/js/[name].js',
                                    entryFileNames: 'assets/js/[name].js',
                                },
                            },
                        },
                    },
                });
            },
        },
    };
}
