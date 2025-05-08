// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: 'vite',
  tailwindCSS: {
    order: true,
  },
  ignores: ['src/helpers/types', 'src/app/routeTree.gen.ts', 'src/components/ui'],
})

