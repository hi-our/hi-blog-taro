import Taro from "@tarojs/taro";
import { Component } from 'react'
import './app.styl'

class App extends Component {

  componentDidMount () {
    // 预拉取数据，加速首次加载的速度
    Taro.getBackgroundFetchData({
      fetchType: 'pre',
      success(res) {
        /* @ts-ignore */
        Taro.setStorageSync('posts', res.fetchedData)
      },
      fail(error) {
        console.log('error', error)
      }
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
