// components/textarea/textarea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   text:{
     type:String,
     value:''
   }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputFn(e){//输入中
      let text=e.detail.value
      this.triggerEvent('inputFn',{value:text})
    },
    confirmFn(e){//点击手机键盘完成
      var value=e.detail.value;
    }
  }
})
