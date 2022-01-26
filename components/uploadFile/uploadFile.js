// components/uploadFile/uploadFile.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl:'https://api.dg.zykjedu.cn/zhxy.files/Asset/icon-appendixline.png',
    filename:null,//附件名称
  },

  /**
   * 组件的方法列表
   */
  methods: {
    filepromise(){
        return new Promise((resolve,reject)=>{
          wx.chooseMessageFile({//客户端选择文件
            count: 1,
            type: 'all',
            success (res) {
              resolve(res)
            }
          })
        })
    },
    uploadfile(ret){
       return new Promise(((resolve, reject) => {
         const tempFilePaths = ret.tempFiles
         wx.uploadFile({//上传文件
           url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
           filePath:tempFilePaths[0],
           name: 'file',
           formData: {
             'user': 'test'
           },
           success (res){
             resolve(res)
           },
           fail(err){
             reject(err)
           }
         })
       }))
    },
    // 方法1: 2个promise的嵌套使用，获取异步结果
    fn(){
      var _this=this;
     this.filepromise().then((res)=>{
       return _this.uploadfile(res);
     }).then((res)=>{
       const data = res.data
       _this.setData({
         filename:tempFilePaths[0].name
       })
     },(err)=>{
       console.log('失败原因：',err)
     })
    },
    // 方法2 :async 获取异步结果
    async fileup(){
      var ret=await this.filepromise();
      var res=await this.uploadfile(ret);//async使用不太好的就是，reject无返回，在这就断了
      const tempFilePaths = ret.tempFiles;
      this.setData({
        filename:tempFilePaths[0].name
      })
    },
    //方法3： 2个异步回调：
    chooseFile:function(e){
      var _this=this;
      wx.chooseMessageFile({//客户端选择文件
        count: 1,
        type: 'all',
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles
          console.log('附件：'+tempFilePaths[0].name);//type只能知道是file或image，file就是各种~
          wx.uploadFile({//上传文件
            url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success (res){
              const data = res.data
              //do something
              _this.setData({
                filename:tempFilePaths[0].name
              })
            }
          })
        }
      })
    }
  }
})
