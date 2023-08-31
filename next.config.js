/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = {
    images: {
        domains: ["cdn.razorpay.com"],
        formats: ['image/webp']
    },
}

module.exports = nextConfig
