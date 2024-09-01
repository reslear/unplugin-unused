import { defineConfig } from 'tsup'
import Unused from './src/esbuild'

export default defineConfig({
  entry: ['./src/*.ts'],
  format: ['cjs', 'esm'],
  target: 'node18.12',
  splitting: true,
  cjsInterop: true,
  clean: true,
  dts: true,
  esbuildPlugins: [Unused({ level: 'error' })],
})
