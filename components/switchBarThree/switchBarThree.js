// Core/switchBarThree/switchBarThree.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    switch:Number,
    labelleft:String,
    labelmiddle:String,
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
    changeSwitch:function(e){
      var index = e.currentTarget.dataset.index;
      console.log(index);
      this.triggerEvent('changeEvent',{index:Number(index)},{});
    },
  }
})
