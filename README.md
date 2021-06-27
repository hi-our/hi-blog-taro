# 小溪里调整的细节

**设计稿尺寸**

代码与[小溪里技术站](https://www.xiaoxili.com)上保持一致，设计稿尺寸更换为375

**代码别名**
为了更好引用组件，所以加了几个别名，如 `import ImageMax from "components/image-max"`

**图片地址**

图片也都是直接用的小溪里主站上的，并且开启了Webp压缩。

```jsx
export default function ImgWithMax ({
  src = '',
  maxWidth,
  className,
  mode = 'aspectFill',
  ...delegated
}) {
  if (!src.includes('http')) src = 'https://www.xiaoxili.com' + src
  src = src + `?imageView2/2/w/${maxWidth}/format/webp/ignore-error/1`
  return (
    <img src={src} className={className} mode={mode} webp {...delegated} />
  );
}
```

**链接地址**

我的链接有三种类型：

* 原生小程序页，如 `/pages/about/index`
* 在小溪里主网站上，组件内用的相对路径，此处需要添加域名，这类页面如博文、技术分享、npm开源包等
* 已经写了绝对地址，但依旧是在 https://www.xiaoxili.com 下的

```jsx
import Taro from '@tarojs/taro'

function NavLink({ className, href = '', name = '', children = '', isActive, style = {}, title = '' }) {

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
```

# Taro 官方给出的安装及使用说明

> Taro v3.3+


## Getting Start

```bash
# 安装 CLI
npm i @tarojs/cli@alpha -g

> 小溪里备注： `hi-blog-taro` 已经将 taro-cli 放在 package.json 中，可以跳过全局安装 cli。

# 启动项目
cd hi-blog-taro
npm i
taro build --type weapp --watch
```

## 兼容工作

相对于官方示例的 H5 代码，本项目主要做了以下兼容工作：

### 1. 浏览器默认样式

#### 方式一、开发者可以选择在全局引入浏览器的默认样式

Taro 提供两种内置样式我们可以直接引入生效：

- `@tarojs/taro/html.css`: W3C HTML4 的内置样式，只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。
- `@tarojs/taro/html5.css`: Chrome(Blink) HTML5 的内置样式，内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。

```scss
// app.css
// html4
import '@tarojs/taro/html.css';
// html5
import '@tarojs/taro/html5.css';
```

#### 方式二、只摘取部分需要的浏览器默认样式

以往编写 H5 应用时，我们常常会写一些样式去重置浏览器默认样式。所以一般情况不需要引入，或者可以手动挑选必须的样式。

```scss
// app.css
// 以下是为了适配 VantUI 项目所需要的默认样式
.h5-span {
  display: inline;
}
```

### 2. 尺寸单位

Taro 默认会对开发者编写的尺寸进行转换：

- 小程序：px -> rpx
- H5：px -> rem

但是组件库一般按照 750px 设计稿的 1/2 编写尺寸，Taro 不需要再对组件库的尺寸进行转换。

可以配置 `@tarojs/plugin-html` 的 `pxtransformBlackList` 选项进行过滤：

```js
// config/index.js
config = {
  plugins: [
    ['@tarojs/plugin-html', {
      // 过滤 weui 组件库的前缀：weui
      pxtransformBlackList: [/page|h5|weui/]
    }]
  ]
  // ...
}
```

### 3. 样式选择器

以下选择器不能正常工作：

- 通配符 `*`
- 媒体查询
- 属性选择器，当属性不是对应小程序组件的内置属性时


# 更新日志
## v0.1.7
* 性能评分，图片、文字等
## v0.1.6
* 添加底部信息

## v0.1.5
* 首页上线
* 页面跳转到 Webview内