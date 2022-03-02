module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px-to-viewport')({
                        viewportWidth: 375, // 视窗的宽度，对应移动端设计稿的宽度，一般是375  1vw = 3.75px
                        propList: ['*'],    // 能转化为vw的属性列表
                        selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
                        exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                    }),
                ],
            },
        },
    },
}