/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePath: [path.join(__dirname, "styles")],
        prependData: `@import "./styles/main.scss";`
    },
    images: {
        domains: ['i.pinimg.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',  // Google images
            'platform-lookaside.fbsbx.com',  // Facebook images
            'graph.facebook.com',  // Facebook images
            'cdn.auth0.com',  // Auth0 images
        ]
    },
}

module.exports = nextConfig
