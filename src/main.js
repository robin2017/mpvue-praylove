import Vue from 'vue'
import App from './App'
import store from './store'
/* eslint-disable */
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/match/main'],
    window: {
      navigationBarBackgroundColor: '#40586d',
      navigationBarTextStyle: 'white',
      navigationBarTitleText: '电影 « 豆瓣',
      backgroundColor: '#f8f9fb',
      backgroundTextStyle: 'dark',
      enablePullDownRefresh: false
    },
      "tabBar": {
          "color": "#ccc",
          "selectedColor": "#35495e",
          "borderStyle": "white",
          "backgroundColor": "#f9f9f9",
          "list": [
              {
                  "text": "测试",
                  "pagePath": "pages/test/main",
                  "iconPath": "static/images/pray/edit-square.png",
                  "selectedIconPath": "static/images/pray/edit-square.png"
              },
              {
                  "text": "匹配",
                  "pagePath": "pages/match/main",
                  "iconPath": "static/images/pray/team.png",
                  "selectedIconPath": "static/images/pray/team.png"
              },
              {
                  "text": "聊天",
                  "pagePath": "pages/chat/main",
                  "iconPath": "static/images/pray/message.png",
                  "selectedIconPath": "static/images/pray/message.png"
              },
              {
                  "text": "我的",
                  "pagePath": "pages/profile/main",
                  "iconPath": "static/images/pray/user.png",
                  "selectedIconPath": "static/images/pray/user.png"
              }
          ]
      }
  }
}
