const mockData = () => {
  return Array.from(Array(30).keys()).map(item => {
    if (item < 10) {
      return '00' + item
    } else {
      return '0' + item
    }
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[
     ],
     url:'https://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png',
     url2:'http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png'
    
  },
  onLoad(){
    let group = []
    let list = mockData()
    list.forEach((item,index) => {
      let imgurl=index%2==0?this.data.url:this.data.url2;
      group.push({url: imgurl})
    })
 this.setData({list:group})
  }
  })