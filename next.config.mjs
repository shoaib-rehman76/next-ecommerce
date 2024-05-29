/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/api/:path*", // Matches all API routes under `/api`
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3001' }, // Replace with your client-side domain and port
                    { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' }, // Common HTTP methods
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' }, // Common request headers
                    { key: 'Access-Control-Allow-Credentials', value: 'true' }, // Allow credentials
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
            },
        ],
    },

};

export default nextConfig;
