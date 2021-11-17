module.exports = {
    transpileDependencies: [
        'vuetify',
    ],

    outputDir: '../dist',

    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/assets/styles/variables.scss";',
            },
        },
    },

    productionSourceMap: false,

    lintOnSave: 'error',
};
