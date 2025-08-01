import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define:{
    'process.env.VITE_SERVER_URI':JSON.stringify(process.env.VITE_SERVER_URI)
  },
  assetsInclude: ["**/*.JPG"],
});