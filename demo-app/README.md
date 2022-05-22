react配置@符号进行导入
  1.运行npm run eject
  此命令会把 react-scripts 封装的一些webpack配置等全部解压到项目目录，项目结构中会多出 config 目录 和 scripts 目录
  在config/webpack.config.js文件的alias中插入代码
  在alias中添加一行：'@': path.resolve(__dirname,'../src')
  alias: {
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    ........
    '@': path.resolve('src'),
  },

  2.重启项目









