import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components"
import { request } from "../../utils/request";
import Prolist from '../../components/prolist'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
      prolist: []
    }
  }

  componentDidMount() {
    request({ url: '/getlunbo' }).then(res => {
      this.setState({
        bannerList: res.data.message
      })
    })
    this.getGoods()
  }

  getGoods() {
    request({ url: '/getgoods' }).then(res => {
      this.setState({
        prolist: res.data.message
      })
      Taro.stopPullDownRefresh()
    })
  }

  onPullDownRefresh() {
    this.getGoods()
  }

  onReachBottom() {
    console.log('bottom');
  }

  render() {
    return (
      <View>
        <Swiper indicatorDots autoplay circular>
          {
            this.state.bannerList.map((item, index) => (
              <SwiperItem key={index}>
                <Image style='width: 100%' src={item.img}></Image>
              </SwiperItem>
            ))
          }
        </Swiper>

        <Prolist prolist={this.state.prolist} />

      </View>
    )
  }
}

export default Index