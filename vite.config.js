import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbzKrwp4GDPD3YLg3nwmFQiXZvzyGN8Uo4bE-UuJpCTDuJ0DeGLBdkq4Bp3TRXrMUBczmg/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});