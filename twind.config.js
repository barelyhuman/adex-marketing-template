import { defineConfig } from '@twind/core'
import tailwind from '@twind/preset-tailwind'
import autoprefix from '@twind/preset-autoprefix'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      colors: {
        neutral: {
          950: 'oklch(0.145 0 0)',
        },
      },
    },
  },
  presets: [tailwind(), autoprefix()],
})
