import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world! 你好啊，taro</Text>
      </View>
    );
  }
}
