import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbyu7onD6F3uMuE5V_-jIloIsYV1nBWpIdW0hUB0IsIBtNk_WBkm9vubF82Y2DnLzMhP7g/exec",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
