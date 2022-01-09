Page({
  data:{
    // 组件my-switchBar
    switch:0,
     // 组件my-switchBarThree
    switch:2, //0  1 2
      // 组件my-search
    searchValue:null
    //其他
  },
  // 子组件my-switchBar触发父组件
  changeSwitch:function(){
    var sw=this.data.switch;
    sw=sw?0:1;
    this.setData({
      switch:sw
    })
    // 下面可进行数据请求……
  },
  // 子组件my-switchBarThree触发父组件
  changeSwitch2:function(e){
    this.setData({
      switch2:e.detail.index
    }) // 下面可进行数据请求……
  },
  //子组件my-search触发父组件
  cancelSearch(e){//清空输入框
    this.setData({
      searchValue: null 
    })
  },
  changeInput(e){//输入变化后
    this.setData({
      searchValue: e.detail.value
    })
  }
})
