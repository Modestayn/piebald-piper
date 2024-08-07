import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {barrel} from 'vite-plugin-barrel';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), barrel({packages: ['@mui/material', '@mui/icons-material']})],
});
