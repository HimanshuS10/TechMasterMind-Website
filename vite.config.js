import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import SitemapPlugin from 'vite-plugin-sitemap';

export default {
  plugins: [
    SitemapPlugin({
      hostname: 'https://yourwebsite.com'
    })
  ]
};
