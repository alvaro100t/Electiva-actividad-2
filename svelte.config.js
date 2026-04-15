import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const isDev = process.argv.includes('dev');

const config = {
	kit: {
		paths: {
			base: isDev ? '' : '/Electiva-actividad-2'
		},
		adapter: adapter({
			fallback: 'index.html'
		})
	}
};

export default config;
