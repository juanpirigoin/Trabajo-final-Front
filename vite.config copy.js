import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbwAqKPArDSDyf27KzTK-fH1yv5-2JQ7IZjlZ66MLvnahzVb2-CMV4-2tGPnpShlrmvXfA/exec",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
