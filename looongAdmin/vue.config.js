const webpack = require('webpack')
module.exports = {
  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? '/looongAdmin/' : './',
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,
  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
  productionSourceMap: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    // extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    hot: true, //热加载
    host: '0.0.0.0', //ip地址
    port: 8085, //端口
    https: false, //false关闭https，true为开启
    open: true, //自动打开浏览器
    proxy: {
      '/api': { //本地 
        target: 'xxx',
        // 如果要代理 websockets
        ws: true,
        changeOrigin: true
      },
      '/test': { //测试
        target: 'xxx'
      },
      '/pre': { //预发布
        target: 'xxx'
      },
      '/pro': { //正式
        target: 'xxx'
      }
    }
  },
  pluginOptions: { // 第三方插件配置
    // ...
  },
  pages: { //配置多页面入口        
    login: {
      entry: 'src/login/login.main.js',
      template: 'public/login.html',
    },
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
    },
  },
  // chainWebpack: config => {
  //   // ie报错无效字符 添加该配置项 解决该问题 
  //   config.module
  //     .rule('iview')
  //     .test(/iview.src.*?js$/)
  //     .use('babel')
  //     .loader('babel-loader')
  //     .end()
  // }
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    config.module
      .rule("vue")
      .use("iview-loader") // 解决ivew组件 忽略前缀i的问题
      .loader("iview-loader")
      .options({
        prefix: false,
      })
      .end();
  }

}