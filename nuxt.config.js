export default {
    mode: "universal",
    head: {
        title: "Finish Club",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
        ],
    },
    loading: {
        color: "#000"
    },
    modules: [
        "@nuxtjs/style-resources",
        "nuxt-i18n"
    ],
    i18n: {
        locales: ["ru", "az"],
        defaultLocale: "ru",
        vueI18n: {
            fallbackLocale: "ru",
        }
    },
    styleResources: {
        scss: ["~/assets/scss/_variables.scss", "~/assets/scss/_mixins.scss"],
    },
    css: ["~/assets/scss/main.scss"],
    build: {
        postcss: {
            "postcss-cssnext": {
                browsers: ["last 2 versions", "ie >= 11"],
            },
        },
        extractCSS: process.env.NODE_ENV !== "development",
        optimization: {
            runtimeChunk: "single", // Splitting out areas of the application code // The value 'single' instead creates a runtime file to be shared for all generated chunks.
            splitChunks: {
                chunks: "all",
                // Splitting out each npm package & Splitting out areas of the application code
                // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `npm.${packageName.replace("@", "")}`;
                        },
                    },
                },
            },
        },
        filenames: {
            app: ({ isDev }) => isDev ? "[name].js" : "[name].[contenthash].js", // [chunkhash].js
            chunk: ({ isDev }) => isDev ? "[name].js" : "[name].[contenthash].js", // [chunkhash].js
            css: ({ isDev }) => isDev ? "[name].css" : "[name].[contenthash].css", // [contenthash].css
            // img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]', // img/[hash:7].[ext]
            // font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]', // fonts/[hash:7].[ext]
            // video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]' // videos/[hash:7].[ext]
        },
    },
    generate: {
        dir: 'public', // по аналогии со старым сайтом
    },
};
