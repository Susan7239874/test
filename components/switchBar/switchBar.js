// Core/switchBar/switchBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    switch:{
      type:Boolean,
      value:0
    },
    labelleft:String,
    labelright:String
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
    changeSwitch:function(){
      this.triggerEvent('changeEvent');//触发父组件中的自定义事件
    },
  }
})
