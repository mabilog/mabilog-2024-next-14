/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Exclude SVG files from Next.js's default handling
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (oneOfRule.issuer?.and?.includes("_app")) {
            oneOfRule.exclude = /\.(svg)$/;
          }
        });
      }
    });

    // Add a rule to use @svgr/webpack for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false, // Disable SVGO optimization (optional)
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
