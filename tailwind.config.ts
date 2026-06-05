import type { Config } from "tailwindcss"
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>> {
  content: ["./app/**/*.{vue,js,ts}"],
   plugins: [tailwindTypography]
}

