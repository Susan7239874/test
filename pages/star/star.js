// pages/star/star.js
Page({
  data: {
    score:[0,0,0,0,0],
    grade:0,

    score2: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
    grade2:0,
  },
  changeStar:function(e){
    this.setData({
      score: e.detail.s,
      grade: e.detail.index + 1
    })
  },
  log: function (e) {
    this.setData({
      grade2:e.detail.grade,
      score2:e.detail.score
    })
  },

})
