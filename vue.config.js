// import {SERVICE_URL} from "./src/api/index"

let rt = 'http://24992uu588.qicp.vip:80'
// let rt = 'http://192.168.100.103:8190/'

module.exports = {
    publicPath: './',
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.symlinks(true)
    },
    configureWebpack: {
        performance: {
            hints: 'warning',
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js')
            },
        },
    },
    css: {
        extract:
            process.env.NODE_ENV === 'production'
                ? {
                      ignoreOrder: true,
                  }
                : false,
    },
    devServer: {
        progress: true,
        port: 6001,
        open: true,
        // 设置代理
        proxy: {
            '/trms': {
                target: rt, // 域名
                ws: false, // 是否启用websockets
                changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/trms': '/',
                },
            },
        },
    },
}
