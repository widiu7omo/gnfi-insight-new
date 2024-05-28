/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
import meta from './public/article/generated-meta.json' assert {type: 'json'}
const nextConfig = {
  output: 'export',
  transpilePackages: ['lucide-react'],
  images: { unoptimized: true },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  assetPrefix: isProd ? `https://www.goodnewsfromindonesia.id/special-insights/${meta.slug}` : undefined,
}

export default nextConfig
