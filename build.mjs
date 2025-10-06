import { build } from 'esbuild';

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  target: 'node20',
  platform: 'node',
  outfile: 'build/index.js',
  sourcemap: true,
  external: [],
});