import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fffaf4",
        mint: "#d9efe7",
        teal: "#0f766e",
        "teal-dark": "#0b4c48",
        coral: "#ec6f5f",
        "coral-soft": "#ffe2dc",
        sage: "#718f82",
        ink: "#23302f",
        muted: "#65716f",
        line: "rgba(35, 48, 47, 0.12)"
      },
      boxShadow: {
        soft: "0 16px 42px rgba(23, 45, 42, 0.07)",
        deep: "0 24px 70px rgba(23, 45, 42, 0.18)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
