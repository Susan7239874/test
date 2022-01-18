// components/handled/handled.js
var config ='https://api.dg.zykjedu.cn/zhxy.files/Asset/'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    typelist:[
      '请假','报销', '外勤','休假','采购','用章'
    ],
    config:config
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
