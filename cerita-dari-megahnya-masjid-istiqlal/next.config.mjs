/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
import meta from './public/article/generated-meta.json' with {type: 'json'}
import metaConfig from './meta-config.json' with {type: 'json'}
const prefixWithSlug = isProd ? `${metaConfig.baseUrl}/${meta.slug}` : ''
const assetPrefix = prefixWithSlug.replaceAll(!metaConfig.withSlug ? meta.slug : '', '')
const nextConfig = {
  output: 'export',
  transpilePackages: ['lucide-react'],
  images: { unoptimized: true },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  assetPrefix,
}

export default nextConfig
