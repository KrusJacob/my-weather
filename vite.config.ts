import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "My weather",
    short_name: "My weather",
    description: "An app for viewing the weather in your city",
    theme_color: "#5A8FD8",
    display: "standalone",
    icons: [
      {
        src: "assets/images/my-weather-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/images/my-weather-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  includeAssets: "assets/images/*.jpg",
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/api\.openweathermap\.org\/data\/2\.5\/weather/,
        handler: "NetworkFirst",
        options: {
          cacheName: "weather-api-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24, // 1 день
          },
        },
      },
      {
        urlPattern: /^https:\/\/api\.openweathermap\.org\/data\/2\.5\/forecast/,
        handler: "NetworkFirst",
        options: {
          cacheName: "forecast-api-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24, // 1 день
          },
        },
      },
    ],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), vitePWA],
});
