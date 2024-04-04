/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sumorestaurante.com',
        port: '',
        pathname: '/wp-content/uploads/2020/05/sumored2.jpg'
      },
      {
        protocol: 'https',
        hostname: 'sumorestaurante.com',
        port: '',
        pathname: '/wp-content/uploads/2020/05/gif400b.gif'
      },
    ]
  }
};

export default nextConfig;
