/** @type {import('next').NextConfig} */
const nextConfig = {
    i18next: {
        locales: ["en", "ru", "ua"],
        defaultLocale: "en",
        localeDetection: false,
        localePath: "./app/locales"
    }
}

module.exports = nextConfig
