var config = 'https://api.dg.zykjedu.cn/zhxy.files/Asset/'  // 组件my-icons
var timer = require('../../plugins/wxTimer.js'); ///插件wxTimer定时器
Page({
  data: {
    // 组件my-switchBar
    switch: 0,
    // 组件my-switchBarThree
    switch: 2, //0  1 2
    // 组件my-search
    searchValue: null,
    // 组件my-icons
    iconlist: [{
      name: "考勤",
      url: "/pages/attendance/attendance",
      imgUrl: config + "icon-calendar.png"
    }, {
      name: "审批",
      url: "/pages/approval/approval",
      imgUrl: config + "icon-person.png"
    }, {
      name: "通知",
      url: "/pages/noticeManage/noticeManage",
      imgUrl: config + "icon-notice.png"
    }, {
      name: "借阅",
      url: "/pages/Home/Page/Book/Index",
      imgUrl: config + "icon-book.png"
    }, {
      name: "报修",
      url: "/pages/fix/fix",
      imgUrl: config + "icon-fix.png"
    }],
    // 组件my-icons2
    iconlist2: [{
      name: "考勤",
      url: "/pages/attendance/attendance",
      imgUrl: config + "icon-calendar.png"
    }, {
      name: "审批",
      url: "/pages/approval/approval",
      imgUrl: config + "icon-person.png"
    }, {
      name: "通知",
      url: "/pages/noticeManage/noticeManage",
      imgUrl: config + "icon-notice.png"
    }, {
      name: "借阅",
      url: "/pages/Home/Page/Book/Index",
      imgUrl: config + "icon-book.png"
    }, {
      name: "报修",
      url: "/pages/fix/fix",
      imgUrl: config + "icon-fix.png"
    }, {
      name: "报修",
      url: "/pages/fix/fix",
      imgUrl: config + "icon-fix.png"
    }],
    // 組件my-line-fidld
    fieldValue: null,
    // 组件my-textarea
    text: null,
    //组件handleCard
    handledList: [
      {
        type: 0,
        status: 0,//0是通过 1不通过
        title: '病假',
        date: '2020/09/20  11:00',
        dealdate: '2020/09/20  11:00',
        person: '白小',
        reason: '今天早上起来之后有点感冒'
      },
      {
        type: 1,
        status: 1,
        title: '病假',
        date: '2020/09/20  11:00',
        dealdate: '2020/09/20  11:00',
        person: '白小',
        reason: '今天早上起来之后有点感冒'
      }
    ],
    //插件wxTimer
    timeExpireList: [],//倒计时列表
    wxTimerList: {},
    //其他
  },
  // 子组件my-switchBar触发父组件
  changeSwitch: function () {
    var sw = this.data.switch;
    sw = sw ? 0 : 1;
    this.setData({
      switch: sw
    })
    // 下面可进行数据请求……
  },
  // my-switchBarThree触发父组件
  changeSwitch2: function (e) {
    this.setData({
      switch2: e.detail.index
    }) // 下面可进行数据请求……
  },
  //my-search触发父组件
  cancelSearch(e) {//清空输入框
    this.setData({
      searchValue: null
    })
  },
  changeInput(e) {//输入变化后
    this.setData({
      searchValue: e.detail.value
    })
  },
  // my-line-fidld输入触发父组件
  valueInput(e) {
    this.setData({
      fieldValue: e.detail.value
    })
  },
  // my-textarea输入触发父组件
  inputFn(e) {
    this.setData({
      text: e.detail.value
    })
  },
  //插件wxTimer使用
  timerSetting() {
    // 单个定时器：
    var wxTimer1 = new timer({
      beginTime: "00:00:10",
      name: 'wxTimer1',
      complete: function () {
        console.log("完成了")
      }
    })
    wxTimer1.start(this)
    // // 多个定时器：
    // var wxTimer1 = new timer({  //开启第一个定时器
    //   beginTime: "00:00:10",
    //   name: 'wxTimer1',
    //   complete: function () {
    //     console.log("完成了")
    //   }
    // })
    // wxTimer1.start(this);
    // var wxTimer2 = new timer({//开启第二个定时器
    //   beginTime: "00:01:11",
    //   name: 'wxTimer2',
    //   complete: function () {
    //     console.log("完成了")
    //   }
    // })
    // wxTimer2.start(this);
  },
  onLoad() {
    this.timerSetting();
  }
})
