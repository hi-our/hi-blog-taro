import { getSystemInfo } from "utils/common"

const systemInfo = getSystemInfo()
let maxScreen = Math.max(systemInfo.screenWidth, systemInfo.screenHeight)
console.log('systemInfo', systemInfo, maxScreen)

export default function ImgWithMax ({
  src = '',
  maxWidth,
  className,
  mode = 'aspectFill',
  ...delegated
}) {
  if (!src.includes('http')) src = 'https://www.xiaoxili.com' + src
  src = src + `?imageView2/2/w/${maxScreen > 1000 ? maxWidth : 750}/format/webp/ignore-error/1`

  return (
    <img src={src} lazyLoad={true} className={className} mode={mode} webp {...delegated} />
  );
};