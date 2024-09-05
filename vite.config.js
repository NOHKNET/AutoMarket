import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
            server: {
                host: 'localhost',
                https: true,
                hmr: {
                    host: '631f-113-164-236-59.ngrok-free.app',
                    port: 443,
                },
            }
        }),
    ],
});
