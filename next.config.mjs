/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "django-nextjs-crud-back-end.onrender.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  