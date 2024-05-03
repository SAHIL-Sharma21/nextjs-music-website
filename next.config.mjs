/** @type {import('next').NextConfig} */
const nextConfig = {
    //solution for iur problem as giving config for images here when using third party images
    //this is the new method uisng remotepatterns and passing different domains.
    images: {
        loader: "default",
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com'
        },
        {
            protocol: 'https',
            hostname: 'plus.unsplash.com'
        }]
    }
};

export default nextConfig;
