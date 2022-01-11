// components/line-field/line-field.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindKeyInput: function (e) {
      this.triggerEvent('valueInput',{value:e.detail.value})
      // this.setData({
      //   ['new.title']: e.detail.value
      // })
      // console.log(this.data.new.title)
    },
  }
})
