/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: '/api/',
            destination:'http://127.0.0.1:5000/login',
          },
        ]
      },
}

export default nextConfig
