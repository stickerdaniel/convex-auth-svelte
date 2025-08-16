import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	test: {
		exclude: ['e2e/**', 'node_modules/**', 'dist/**', '.svelte-kit/**']
	}
});
