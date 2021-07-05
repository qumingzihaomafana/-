// pages/xx/ye.js

// 创建微信api播放器实例
const auto =wx.createInnerAudioContext({});

const durationUtil = require('../../utils/duration.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    datelist:[
      {
        dataUrl:'https://aod.cos.tx.xmcdn.com/storages/05ca-audiofreehighqps/E0/5B/CKwRINsEDoZMAA2OJQCMHGlY.m4a',
        image: 'http://p4.music.126.net/xcfSQzMmgrRlDso26M63PA==/109951165735751627.jpg?param=500y500',
        name:'小郑',
        dataName:'hope'
      },
      {
        dataUrl:'https://gs-sycdn.kuwo.cn/6f14774e53c33ef2b270d0a6c601bab5/6048742c/resource/n3/10/53/2325638500.mp3',
        image:'/image/109951165420065213.jpg',
        name:'小郑',
        dataName:'ゴンチチ - 歩いても 歩いても'
      },
      {
        dataUrl:'https://gs-sycdn.kuwo.cn/6f14774e53c33ef2b270d0a6c601bab5/6048742c/resource/n3/10/53/2325638500.mp3',
        image:'/image/109951165742217247-1.jpg',
        name:'小郑',
        dataName:'流离'
      },
      {
        dataUrl:'https://gs-sycdn.kuwo.cn/6f14774e53c33ef2b270d0a6c601bab5/6048742c/resource/n3/10/53/2325638500.mp3',
        image:'/image/109951164896780124.jpg',
        name:'小郑',
        dataName:'Red Tower'
      }
    ],
    // 当前点击的音乐
    music: {},
    // 音乐播放器状态
    isPlay: false,
    progressNumber: 0,
    currentTime: "00:00",
    duration: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化音乐数据
    var music=this.data.datelist[0]
    // 给微信音乐api实例对象添加默认播放路径
    auto.src = music.dataUrl
    this.setData({
      music:music
    })
    var that = this

    // 音频实时播放事件，回调
    auto.onTimeUpdate(function () {
      // 获取时长
      console.log(auto.duration)
      // 获取实时进展
      console.log(auto.currentTime)
      that.setData({
        progressNumber: auto.currentTime,
        duration: auto.duration,
        currentTime: durationUtil.formatMinutesSeconds(auto.currentTime)
      })
    })
    auto.onPlay(() =>{
      // 解决监听播放事件回调异常问题
      auto.duration
      console.log()
    })
    auto.onSeeked(() =>{
      // 解决监听播放事件回调异常问题
      auto.duration
    })
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

  },
  onPlay: function(e){
    // 获取时长
    console.log(auto.duration)
    // 获取实时进展
    console.log(auto.currentTime)
    console.log(e)
    console.log("点击要播放的音乐",e.currentTarget.dataset.dataurl)
    // 添加播放器音乐路径
    auto.src = e.currentTarget.dataset.dataurl;
    // 播放音乐
    auto.play();
    var music = this.data.datelist[e.currentTarget.dataset.index]
    console.log("缓存音乐",music)
    this.setData({
      music: music,
      isPlay: false,
      currentTime: '00.00'
    })
  },

  play: function(){
    // 播放音乐
    auto.play();
    this.setData({
      isPlay: true
    })
  },
  stop: function(){
    // 停止音乐
    auto.stop();
    this.setData({
      isPlay: false
    })
  },
  // 进度条拖动事件
  seek: function(e){
    console.log(e)
    auto.seek(e.detail.value)
  },
  // 查看封面
  lookImage: function(e){
    console.log(e)
    wx.previewImage({
  // 当前显示图片的http链接
      current: e.currentTarget.dataset.coverimgurl, 
  // 需要预览的图片http链接列表 
      urls: [e.currentTarget.dataset.coverimgurl] 
    })
  },
  // 跳转歌曲信息页
  navigateToSonginformation: function(){
      console.log('跳转')
      var music = this.data.music
      wx.navigateTo({
        url: '/pages/home/home',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('data', { music:music })
        }
      })
  }
})