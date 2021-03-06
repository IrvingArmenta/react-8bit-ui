import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: "./lib/cjs/index.js",
      format: 'cjs',
      sourcemap: true
    },
    {
      file: "./lib/esm/index.js",
      format: 'es',
      sourcemap: true
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    'react/jsx-runtime'
  ],
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
    sourcemaps(),
    terser()
  ],
};