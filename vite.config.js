import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        outDir: 'dist',
        target: "modules",
        lib: {
            entry: 'src/bundle.js',
            name: 'VectorGrid',
        }
    }
});
