import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    build: {
        outDir: "build",
    },
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") },
            { find: "@app", replacement: path.resolve(__dirname, "src/app") },
            { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
            { find: "@common", replacement: path.resolve(__dirname, "src/common") },
            { find: "@config", replacement: path.resolve(__dirname, "src/config") },
            { find: "@features", replacement: path.resolve(__dirname, "src/features") },
            { find: "@i18n", replacement: path.resolve(__dirname, "src/i18n") },
            { find: "@layout", replacement: path.resolve(__dirname, "src/layout") },
            { find: "@routes", replacement: path.resolve(__dirname, "src/routes") },
            { find: "@style", replacement: path.resolve(__dirname, "src/style") },
        ],
    },
});
