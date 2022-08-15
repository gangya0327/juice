import { Component } from "react";
import { View, Image } from "@tarojs/components";
import './index.scss'

class Index extends Component {
  render() {
    return (
      <View className='prolist'>
        {
          this.props.prolist.map((item, index) => (
            <View key={index} className='proitem'>
              <Image style='width: 100px;height: 100px;flex-shrink: 0' src={item.img_url}></Image>
              <View className='content'>
                <View className='title'>{item.title}</View>
                <View className='desc'>{item.zhaiyao}</View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}


export default Index