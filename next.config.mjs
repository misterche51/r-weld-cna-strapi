// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     output: 'export',
//     images: { unoptimized: true }

// };

// export default nextConfig;
import withExportImages from 'next-export-optimize-images'

export default withExportImages({
  output: 'export',
  // write your next.js configuration values.
})