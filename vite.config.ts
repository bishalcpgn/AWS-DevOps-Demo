import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path"; // Use named import for CommonJS modules
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Allow IPv6 and IPv4 connections
    port: 8080, // Development server port
  },
  build: {
    outDir: "dist", // Explicitly set the output directory
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Conditionally include the plugin
  ].filter(Boolean), // Remove falsy values from the plugins array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias "@" to the "src" directory
    },
  },
}));
