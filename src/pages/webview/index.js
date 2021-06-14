import React, { Component } from "react";
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { WebView, View } from '@tarojs/components'


class WebViewPage extends Component {
  state = {
    outLineSrc: '',
    online: false
  }

  componentDidShow() {
    this.initUrl()
  }

  initUrl = () => {
    Taro.getNetworkType().then((res) => {
      let online = res.networkType !== 'none'
      this.setState({
        online
      })
      if (online) {
        this.changeUrl()
      }
    })
  }

  changeUrl = () => {
    let url = decodeURIComponent(getCurrentInstance().router.params.url)
    this.setState({
      outLineSrc: url
    })
  }

  render() {
    const { outLineSrc, online } = this.state

    if (!online) {
      return <View>Loading</View>
    }

    return <WebView src={outLineSrc}></WebView>
  }
}

export default WebViewPage