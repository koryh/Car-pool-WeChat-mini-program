Page({
  data: {
    inputValue: '',
    inputValue2:'',
    showTopTips: false,

    radioItems: [
      { name: 'cell standard', value: '0' },
      { name: 'cell standard', value: '1', checked: true }
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],


    isAgree: false,

    city: ["伦敦", "哈密尔顿", "多伦多","滑铁卢",],
    cityIndex: 0,
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      inputValue2: e.detail.value,
    })
  },
  addbtn: function () {
    if (this.data.inputValue) {
      wx.redirectTo({
        url: '../mine/mine'
      })
      wx.setStorage({
        key: "addTel",
        data: this.data.inputValue
      }),
      wx.setStorage({
        key: "addAdr",
        data: this.data.inputValue2
      }),
      wx.showModal({
        title: '保存成功',
        content: '您可以在个人信息查看',
      })

    } else {
      wx.showModal({
        title: '手机号为空',
        content: '请输入手机号码',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  onload: function () {
    //onload
  },
});