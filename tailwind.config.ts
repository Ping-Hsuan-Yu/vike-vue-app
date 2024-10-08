import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontSize: {
      "1": '1.618rem',
      "2": '2.618rem',
      "3": '4.236rem',
    }
  },
  plugins: [],
} satisfies Config;
