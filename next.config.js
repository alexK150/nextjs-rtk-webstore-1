/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePath: [path.join(__dirname, "styles")],
        prependData: `@import "./styles/main.scss";`
    },
    images: {
        domains: ['i.pinimg.com']
    },
}

module.exports = nextConfig
