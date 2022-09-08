/**
 * @type {import('next').NextConfig}
 */
const repoNameURIPrefix =
  process.env.NODE_ENV == "production" ? "/" + process.env.REPO_NAME : "";

module.exports = {
  assetPrefix: repoNameURIPrefix,
  basePath: repoNameURIPrefix,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
