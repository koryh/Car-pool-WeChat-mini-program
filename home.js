var app = getApp()
Page({
  data: {
    navbar: ['车找人', '人找车'],
    currentTab: 0,
    inputShowed: false,
    inputVal: "",
    newList:[],
    lastid:0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onPullDownRefresh:function(){
    wx.showNavigationBarLoading()

    setTimeout(function(){
      ws.hideNavigationBarLoading
      ws.stopPullDownRefresh()
    },1500)
 
  },


  loadData: function (lastid){
    var limit = 2
    var that = this

    wx.request({
      url: 'https://g1uxxq2x.qcloud.la',
      data: {lastid:lastid, limit:limit},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var len = res.data.length

        that.setData({ lastid:res.data[len-1].id})

        var dataArr = that.data.newlist
        var newData = dataArr.concat(res.data);

        that.setData({
          newlist:newData
        })
        
        console.log(res.data)
        that.modalTap();
      }
    })
  },
  onReachBottom: function () {
    console.log('加载更多')
    this.loadMore();
    setTimeout(() => {
      this.setData({
        isHideLoadMore: true
      })
    }, 1000)
  },
  
  loadMore:function(event){
    var id = event.currentTarget.dataset.lastid
    this.loadData(id);
  },

  onLoad:function(){
    var that = this

    this.loadData(0);
  }
})  