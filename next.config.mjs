/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sumorestaurante.com",
        port: "",
        pathname: "/wp-content/uploads/2020/05/sumored2.jpg"
      },
      {
        protocol: "https",
        hostname: "sumorestaurante.com",
        port: "",
        pathname: "/wp-content/uploads/2020/05/gif400b.gif"
      },
      {
        protocol: "https",
        hostname: "sumorestaurante.com",
        port: "",
        pathname: "/wp-content/uploads/2020/05/cuzco2018_117-768x512.jpg"
      },
      {
        protocol: "https",
        hostname: "sumorestaurante.com",
        port: "",
        pathname: "/wp-content/uploads/2020/05/Nigiri_GyuFoie-768x768.jpg"
      },
      {
        protocol: "https",
        hostname: "sumorestaurante.com",
        port: "",
        pathname: "/wp-content/uploads/2020/05/3cuzco-768x512.jpg"
      }
    ]
  }
};

export default nextConfig;
