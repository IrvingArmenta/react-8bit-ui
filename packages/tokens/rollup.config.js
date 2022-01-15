import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'build/index.ts',
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
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    sourcemaps(),
    terser()
  ],
};