var app = getApp()
Page({
  data: {
    addtel: '',
    addadr:''
  },
  toast: function () {
    wx.navigateTo({
      url: '../info/info'
    })
  },
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'addTel',
      success: function (res) {
        console.log(res.data)
        that.setData({
          addtel: res.data
        })
      }
    }),
      wx.getStorage({
        key: 'addAdr',
        success: function (res) {
          console.log(res.data)
          that.setData({
            addadr: res.data
          })
        }
      })
  }
}) 