module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= '愛荷華博弈任務'
          return args
        })
    }
  }