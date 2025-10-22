// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "BloomCSS",
            fileName: "bloom-css",
            formats: ["es", "umd"]
        },
        rollupOptions: {
            output: {
                assetFileNames: "bloom-css.[ext]"
            }
        }
    }
});
