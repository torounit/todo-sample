// rollup.config.js
import npm      from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel    from 'rollup-plugin-babel'
import env from 'rollup-plugin-env'


export default {
	entry: 'src/scripts/app.jsx',
	dest: 'public/scripts/app.js',
	external: ['./bundle'],
	plugins: [
		env({
			NODE_ENV: 'development'
		}),
		npm({
			jsnext: true,
			extensions: [ '.js', '.jsx' ]
		}),
		commonjs(),
		babel(),
	],
}
