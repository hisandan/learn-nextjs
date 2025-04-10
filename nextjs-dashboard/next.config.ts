/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    serverActions: {
      allowedOrigins: ["ideal-space-winner-gvqx7q6wqxw29gwj-3000.app.github.dev", "localhost:3000"]
    }
  }
}

module.exports = nextConfig

// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     ppr: 'incremental',
//     serverActions: {
//       // edit: updated to new key. Was previously `allowedForwardedHosts`
//       allowedOrigins: ['ideal-space-winner-gvqx7q6wqxw29gwj-3000.app.github.dev'],
//       // allowedForwardedHosts :  ['ideal-space-winner-gvqx7q6wqxw29gwj-3000.app.github.dev'],
//     },
//   }
// };



// export default nextConfig;



