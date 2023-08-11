// import adapter from '@sveltejs/adapter-auto';
import adapter from "sveltekit-adapter-chrome-extension"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		appDir: "app"
	},
	preprocess: vitePreprocess()
}

export default config
