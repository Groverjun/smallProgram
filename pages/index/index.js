//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    active: 0
  },
  // event.detail 的值为当前选中项的索引
  onChange(event) {
    console.log(event.detail);
    wx.switchTab({
      url: "../page1/page1"
    });
  }

});
