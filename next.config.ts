// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/NAMYUNWOO.github.io/' : '',
  basePath: isProd ? '/NAMYUNWOO.github.io' : '',
  trailingSlash: true,
}


