# vue-multipage-server

##下载本模板

- vue init chrisHchen/vue-multipage-server projectname (需预先安装vue-cli)

## 基本开发流程

- npm install
- npm install -g supervisor (dev模式需要这个)



## 项目结构

+ src (前端目录)
  + assets(静态资源目录，如图片)
  + components（.vue文件，最终会被打包成js）
  + ejs（前端模板目录，结构要和entry目录一致）
  + entry (webpack使用的入口，结构要和ejs目录一致)
  + template (头部，底部等公用部分)
+ server (服务端目录)
+ dist (打包文件目录，后期可移动到static上)


## 开发
npm run server



## 构建
npm run build



## 生产
npm start


## 例子
项目里已经有几个test的例子
