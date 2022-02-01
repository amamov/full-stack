const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(() => ({
  reactStrictMode: true,
  enableSvg: true,
  compress: true,
  images: {
    // domains: ["..."],
  },
  webpack(config, { webpack }) {
    const isProd = process.env.NEXT_PUBLIC_MODE === "production"
    return {
      ...config,
      mode: isProd ? "production" : "development",
      devtool: isProd ? "hidden-source-map" : "eval",
      plugins: [...config.plugins],
    }
  },
}))
