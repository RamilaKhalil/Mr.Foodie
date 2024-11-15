import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Makes Vite accessible on any IP address on your local network
    port: 3000, // You can change the port if needed
  },
});
