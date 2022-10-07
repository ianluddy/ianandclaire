/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images')
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}


module.exports = withExportImages(nextConfig)
