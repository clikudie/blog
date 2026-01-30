import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        background: "hsl(var(--color-background) / <alpha-value>)",
        "secondary-foreground":
          "hsl(var(--color-secondary-foreground) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "hsl(var(--color-foreground))",
            "--tw-prose-headings": "hsl(var(--color-foreground))",
            "--tw-prose-links": "hsl(var(--color-foreground))",
            "--tw-prose-bold": "hsl(var(--color-foreground))",
            "--tw-prose-counters": "hsl(var(--color-secondary-foreground))",
            "--tw-prose-bullets": "hsl(var(--color-secondary-foreground))",
            "--tw-prose-hr": "hsl(var(--color-secondary-foreground) / 0.3)",
            "--tw-prose-quotes": "hsl(var(--color-foreground))",
            "--tw-prose-quote-borders": "hsl(var(--color-secondary-foreground))",
            "--tw-prose-captions": "hsl(var(--color-secondary-foreground))",
            "--tw-prose-code": "hsl(var(--color-foreground))",
            "--tw-prose-pre-code": "hsl(var(--color-foreground))",
            "--tw-prose-pre-bg": "hsl(var(--color-foreground) / 0.05)",
            "--tw-prose-th-borders": "hsl(var(--color-secondary-foreground))",
            "--tw-prose-td-borders":
              "hsl(var(--color-secondary-foreground) / 0.3)",
            fontSize: "1.125rem",
            lineHeight: "1.75",
            a: {
              color: "hsl(var(--color-foreground))",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h2: {
              fontSize: "1.5rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              fontSize: "1.25rem",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            p: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
