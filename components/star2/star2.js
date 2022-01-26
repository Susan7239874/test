// index/star2/star2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score:{
      type:Array,
      value:[0,0,0,0,0]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    url:"/images/star/s"
  },

  /**
   * 组件的方法列表
   */
  methods: {
     log:function (e){
      var index = e.currentTarget.dataset.index;
      var s = new Array();
      for (var i = 0; i < 10; i++) {
        if (i <= index) {
          if (i % 2 == 1) {
            s[i] = 2
          } else if (i % 2 == 0) {
            s[i] = 1
          }
        } else {
          if (i % 2 == 1) {
            s[i] = 4
          } else if (i % 2 == 0) {
            s[i] = 3
          }
        }
      }

      this.triggerEvent('starlog',{
        score: s,
        grade: index + 1
      })
    }
  }
})
