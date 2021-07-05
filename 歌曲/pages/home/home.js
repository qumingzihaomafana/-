// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 创建接收器
    const eventChannel = this.getOpenerEventChannel()
    // 监听data事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('data', function(data){
      console.log(data)
      that.setData({
        music: data.music
      })
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
  download: function(){
        var music = this.data.music
        console.log('下载')
        wx.downloadFile({
          url: music.dataUrl, //仅为示例，并非真实的资源
          success (res) {
            console.log('缓存信息',res)
            if (res.statusCode === 200) {
              wx.saveFileToDisk({
                filePath: res.tempFilePath,
                success: function(res) {
                 console.log(res) 
                },
                fail:function(res) {
                  
                 console.log(res) 
                }
              })
            }
          }
        })
      }
    
})