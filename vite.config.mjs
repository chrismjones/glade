import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint';
import sassGlobImports from 'vite-plugin-sass-glob-import';

export default defineConfig(() => ({
	plugins: [
		sassGlobImports(),
		eslint()
	],
    build: {
        rollupOptions: {
			output: {
                assetFileNames: '[ext]/[name][extname]',
                chunkFileNames: '[chunks]/[name].[hash].js',
                entryFileNames: 'glade.js'
            }
        }
    }
}));
