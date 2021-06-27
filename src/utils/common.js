import Taro from '@tarojs/taro'

let _systemInfo = null
let _isXPhoneArea = null
export const getSystemInfo = () => {
  if (_systemInfo === null) {
    _systemInfo = Taro.getSystemInfoSync()
  }
  return _systemInfo || { system: '' }
}

/** 判断是否是 ipx */
export const isIphoneX = () => {
  const systemInfo = getSystemInfo()
  return systemInfo.model.includes('iPhone X')
}

/**
 * 判断是否是 IphoneX、iPhone 11、iPhone 12 系列
 */
/* 
情景一：safeArea 安全区的top 大于0
情景二：在ios 13中获取 model 包含苹果字眼，并且状态栏不小于 44 的情况
*/
export const isIphoneSafeArea = () => {
  if (_isXPhoneArea === null) {
    const { model = '', brand = '', statusBarHeight = 0, safeArea = {} } = getSystemInfo()
    _isXPhoneArea = safeArea.top > 0 || (statusBarHeight >= 44 && (model.includes('iPhone') || brand.includes('Apple') || brand.includes('iPhone')))
  }
  return _isXPhoneArea
}