export default defineAppConfig({
  pages: [
    "pages/home/index",
    "pages/cart/index",
    "pages/index/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: '#333',
    selectedColor: '#3F7BF6',
    list: [{
      text: '主页',
      pagePath: 'pages/home/index',
      iconPath: './static/tabbar/home.png',
      selectedIconPath: './static/tabbar/home-active.png'
    }, {
      text: '购物车',
      pagePath: 'pages/cart/index',
      iconPath: './static/tabbar/workbench.png',
      selectedIconPath: './static/tabbar/workbench-active.png'
    }]
  }
});
