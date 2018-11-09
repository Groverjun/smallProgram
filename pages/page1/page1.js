// pages/page1/page1.js
const area = require('../../utils/area.js');//城市列表
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    AreaList: area.default,
    checked: false
  },
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },
  clsArea(){
    this.setData({ checked: false });
  },
  successArea(val){
    console.log(val);
    this.setData({ checked: false });
  },
  // -------------------------------------------------------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(125);
    Toast('我是提示文案，建议不超过十五字~');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})