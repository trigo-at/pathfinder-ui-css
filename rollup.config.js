import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

export default {
    input: 'src/index',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
    },
    plugins: [
		postcss({
			extensions: [ '.scss' ],
			exclude: 'none',
			plugins: [autoprefixer],
			extract : 'dist/styles.css',
			minimize: true,
		})
	]
};
