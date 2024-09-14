/** @type {import('next').NextConfig} */
const nextConfig = {
    apps: [
        {
          name: 'bidvid-new',
          exec_mode: 'cluster',
          instances: 'max',
          script: './node_modules/next/dist/bin/next',
          args: 'start',
         
       
        }
      ],
  basePath: '/bidvid',
};

export default nextConfig;
