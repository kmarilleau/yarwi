import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		// include: ['src/**/*.{test,spec}.{js,ts}']
		include: []
	},

	server: {
		port: process.env.HISTOIRE ? 6006 : 3000
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
