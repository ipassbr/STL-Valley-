/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Apenas ignorar erros em desenvolvimento para permitir desenvolvimento rápido
    // Em produção, erros devem ser corrigidos
    ignoreBuildErrors: process.env.NODE_ENV === "development",
  },
  images: {
    // Habilitar otimização de imagens do Next.js para melhor performance
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache de imagens por 60 segundos
    dangerouslyAllowSVG: false, // Segurança: não permitir SVG não confiáveis
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
