// index/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score:Array
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
    changelog: function (e) {
      var index = e.currentTarget.dataset.index;
      var s = new Array();
      for (var i = 0; i < 5; i++) {
        if (i <= index) {
            s[i] = 1
        } else {
            s[i] = 0
        }
      }

this.triggerEvent('myevent',{s:s,index:index},{});
    },
  }
})
