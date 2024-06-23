import { defineConfig } from '@farmfe/core'

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  compilation: {
    // currently can't use tree shaking for production builds
    treeShaking: false,
    output: {
      publicPath: '/demos/lgv-farm/',
    },
  },
})
