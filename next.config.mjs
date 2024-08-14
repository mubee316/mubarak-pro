/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const nextConfig = {
  webpack(config) {
    // Extend the existing Webpack configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src/components'), // Adjust based on your project structure
    };

    return config;
  },
};

export default nextConfig;
