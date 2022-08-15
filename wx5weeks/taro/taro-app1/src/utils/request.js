import Taro from "@tarojs/taro"

const baseUrl = 'https://www.fastmock.site/mock/af7c9d90c1cef15ff65b83efcb2be7fa/shop'

export function request(options) {
  const { url, data, method, header } = options

  return new Promise((resolve, reject) => {
    Taro.showLoading({
      title: '加载中'
    })
    Taro.request({
      url: baseUrl + url,
      data: data || {},
      method: method || 'get',
      header: header || {},
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        Taro.hideLoading()
      }
    })
  })
}