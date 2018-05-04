const app = getApp()
var config = require("../../config.js")

Page({
    data: {
        token: null
    },
    onLoad: function(options) {
        //Do some initialize when page load.
       wx.getStorage({
           key: 'token',
           success: (res)=>{
            this.setData({
                token: res.data
            })
            console.log('token',this.data.token)
            wx.request({
                url: `${config.service.host}/weapp/tea_index`,
                header: {
                    'Content-Type': 'application/json'
                },
                data: {
                    token: this.data.token
                },
                success: function(res) {
                    console.log("最终渲染由其他两位完成",res)
                }
            })
           }
       })
    },
    onReady: function() {
        //Do some when page ready.
        
    },
    onShow: function() {
        //Do some when page show.
        
    },
    onHide: function() {
        //Do some when page hide.
        
    },
    onUnload: function() {
        //Do some when page unload.
        
    },
    onPullDownRefresh: function() {
        //Do some when page pull down.
        
    }
})