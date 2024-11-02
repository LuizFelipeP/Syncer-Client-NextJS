/** @type {import('next').NextConfig} */
const nextConfig = {};

import withPWA from "next-pwa";

const config = withPWA({
    dest: "public", // Define o diretório de saída do PWA
    register: true, // Registra automaticamente o service worker
    skipWaiting: true, // Atualiza o service worker automaticamente
    reactStrictMode: true,
    // Outras configurações do Next.js, se necessário
});

export default nextConfig;
