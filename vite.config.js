import { defineConfig } from 'vite'
import { adex } from 'adex'
import preact from '@preact/preset-vite'
import { providers } from 'adex/fonts'

export default defineConfig({
  plugins: [
    adex({
      islands: false,
      fonts: {
        families: [
          {
            name: 'Inter',
            weights: ['400', '600'],
            styles: ['normal'],
          },
        ],
        providers: [providers.bunny()],
      },
    }),
    preact(),
  ],
})
