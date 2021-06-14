import Taro from '@tarojs/taro'

function NavLink({ className, href = '', name = '', children = '', addHtml = true, isActive, style = {}, title = '' }) {

  // console.log('href', href)
  // Must add passHref to Link
  const onGo = () => {
    // console.log('href', href)
    if (href.includes('/pages')) {
      Taro.navigateTo({
        url: href
      })
      return
    }
    if (!href.includes('http')) {
      href = 'https://www.xiaoxili.com' + href
    }
    let pageUrl = '/pages/webview/index?url=' + encodeURIComponent(href)
    // console.log('pageUrl', pageUrl)
    Taro.navigateTo({
      url: pageUrl
    })
  }
  return (
    <a onClick={onGo} className={(className || '') + (isActive ? ' active' : ' ')} style={style} title={title}>{name || children}</a>
  )
}

export default NavLink