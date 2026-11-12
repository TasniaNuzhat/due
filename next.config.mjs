import path from "node:path";
/** @type {import("next").NextConfig} */
const nextConfig = { reactStrictMode: false, webpack(config) { config.module.rules.push({test:/\.mp4$/,type:"asset/resource"}); return config; } };
export default nextConfig;
