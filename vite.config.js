import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbzMHUjSzEpJnfejEmQ6aJIEbMhWpEua_8Es6oSwJiS3cGfrRnmjsTH30QA5clDB760hkQ/exec",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
