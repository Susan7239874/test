
# wx-scomponent
##
小程序自定义组件开发模板：
##


## 使用
在小程序根目录下：
1、
* npm i wx-scomponent
成功后 package.json的依赖如下：
```
  "dependencies": {
    "mineui": "^1.0.0",
    "wx-scomponent": "^1.0.42"
  },
  ```
  2、
然后project.config.json设置npm包里的json文件路径和npm构建后组件放置的目录：
```
 "packNpmManually": true,
    "packNpmRelationList": [
      {  "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./"
      }
    ],
```
3、确定小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，点击开发者工具中的菜单栏：工具 --> 构建 npm，勾选“使用 npm 模块”选项，
根目录下会多出miniprogram_npm 即成功了！

## 开发
项目先npm init，生成package.json进行包管理设置

npm login
```

3. 在已完成编写的 npm 包根目录下执行：

```
npm publish
```

到此，npm 包就成功发布到 npm 平台了。

> PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。

## 目录结构

以下为推荐使用的目录结构，如果有必要开发者也可以自行做一些调整:

```

|--components // 通用自定义组件
|   
|--pages // 用来展示组件
|--package.json // miniprogram字段设置小程序构建npm时从哪里取组件（比如这个项目就是components），version每次publish需要更新

```
