import Taro from "@tarojs/taro";
import { Component } from 'react'
import './app.styl'

const updateManager = Taro.getUpdateManager()

class App extends Component {

  componentDidMount () {
    this.getBackgroundFetchData()
    this.setUpdateManager()
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  getBackgroundFetchData() {
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

  setUpdateManager() {
    if (!updateManager) return

    updateManager.onUpdateReady(() => {
      Taro.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: (res) => {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
