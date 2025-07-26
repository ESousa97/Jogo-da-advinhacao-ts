import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // onde seu bundle será gerado:
    outDir: 'dist',
    // usar o esbuild em vez de terser, assim não precisa instalar nada extra
    minify: 'esbuild',
    // opcional: alvo de compatibilidade
    target: 'esnext'
  }
})
