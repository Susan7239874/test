var config='https://api.dg.zykjedu.cn/zhxy.files/Asset/'  // 组件my-icons
Page({
  data:{
    // 组件my-switchBar
    switch:0,
     // 组件my-switchBarThree
    switch:2, //0  1 2
      // 组件my-search
    searchValue:null,
    // 组件my-icons
    iconlist:[{
      name: "考勤",
      url: "/pages/attendance/attendance",
      imgUrl:config+"icon-calendar.png"
    }, {
      name: "审批",
      url: "/pages/approval/approval",
      imgUrl: config+"icon-person.png"
    }, {
      name: "通知",
      url: "/pages/noticeManage/noticeManage",
      imgUrl: config+"icon-notice.png"
    }, {
      name: "借阅",
      url: "/pages/Home/Page/Book/Index",
      imgUrl: config+"icon-book.png"
    }, {
      name: "报修",
      url: "/pages/fix/fix",
      imgUrl: config+"icon-fix.png"
    }],
      // 组件my-icons2
      iconlist2:[{
        name: "考勤",
        url: "/pages/attendance/attendance",
        imgUrl:config+"icon-calendar.png"
      }, {
        name: "审批",
        url: "/pages/approval/approval",
        imgUrl: config+"icon-person.png"
      }, {
        name: "通知",
        url: "/pages/noticeManage/noticeManage",
        imgUrl: config+"icon-notice.png"
      }, {
        name: "借阅",
        url: "/pages/Home/Page/Book/Index",
        imgUrl: config+"icon-book.png"
      }, {
        name: "报修",
        url: "/pages/fix/fix",
        imgUrl: config+"icon-fix.png"
      }, {
        name: "报修",
        url: "/pages/fix/fix",
        imgUrl: config+"icon-fix.png"
      }],
      // 組件my-line-fidld
      fieldValue:null
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
  // my-switchBarThree触发父组件
  changeSwitch2:function(e){
    this.setData({
      switch2:e.detail.index
    }) // 下面可进行数据请求……
  },
  //my-search触发父组件
  cancelSearch(e){//清空输入框
    this.setData({
      searchValue: null 
    })
  },
  changeInput(e){//输入变化后
    this.setData({
      searchValue: e.detail.value
    })
  },
  // my-line-fidld输入触发父组件
  valueInput(e){
    console.log(111)
    this.setData({
      fieldValue: e.detail.value
    })
  }
})
