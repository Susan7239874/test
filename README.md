# wx-scomponent

小程序自定义组件开发模板：



## 使用

* npm i wx-scomponent

## 开发

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
|--package.json // miniprogram字段设置小程序构建npm时从哪里取组件，version每次publish需要更新

```
