import ModuleTitle from 'components/module-title'
import LinkHtml from "components/link-html"
import ImageMax from "components/image-max"

import './styles.styl'

function Introduction() {
  const titleProps = {
    enTitle: 'ABOUT ME',
    cnTitleLeft: '个人',
    cnTitleRight: '介绍',
  }
  
  return (
    <section className="home-introduction" id='introduction'>
      <ModuleTitle {...titleProps} />
      {/* 个人简绍 描述 */}
      <div className="desc">
        <div className="desc-bitmap">
          <ImageMax className='pic' loading='lazy'  src="https://www.xiaoxili.com/images/bitmap@2x.png" maxWidth='1200' width='600' height='304' alt="bitmap" />
        </div>
        <div delay='0.4' className="desc-content">
          <div className="desc-content-group">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="15" viewBox="0 0 32 15">
              <g className="icon-color-dot">
                  <rect width="32" height="3" />
                  <rect width="32" height="3" y="6" />
                  <rect width="32" height="3" y="12" />
              </g>
            </svg>
          </div>
          <h3>创意 Web 前端工程师</h3>
          <p>我是小溪里，沪江 CCtalk 前端开发工程师，前腾讯云云开发高级布道师，Taro 社区共建者，开发了 Hi 头像小程序，并著有技术小册《从 0 到 1 开发一个智能头像识别小程序》。在前端页面重构及用户体验优化方面有着深入的理解。</p>
          <LinkHtml className="desc-content-more" href="/pages/about/index" title='关于我'>About Me</LinkHtml>
        </div>
      </div>
      {/* 个人简绍 特色 */}
      <ul className="feature">
        <li>
          <ImageMax className='pic' loading='lazy' maxWidth="150" src="https://www.xiaoxili.com/images/icon-1@2x.png" alt="icon-1" width='75' height='60'/>
          <h3>07</h3>
          <p>7年工作经验</p>
        </li>
        <li>
          <ImageMax className='pic' loading='lazy' maxWidth="150" src="https://www.xiaoxili.com/images/icon-2@2x.png" alt="icon-2" width='75' height='60'/>
          <h3>12</h3>
          <p>12篇技术文章</p>
        </li>
        <li>
          <ImageMax className='pic' loading='lazy' maxWidth="150" src="https://www.xiaoxili.com/images/icon-3@2x.png" alt="icon-3" width='75' height='60'/>
          <h3>01</h3>
          <p>1本技术小册</p>
        </li>
        <li>
          <ImageMax className='pic' loading='lazy' maxWidth="150" src="https://www.xiaoxili.com/images/icon-4@2x.png" alt="icon-4" width='75' height='60'/>
          <h3>04</h3>
          <p>4个开源组件</p>
        </li>
        <li>
          <ImageMax className='pic' loading='lazy' maxWidth="150" src="https://www.xiaoxili.com/images/icon-5@2x.png" alt="icon-5" width='75' height='60'/>
          <h3>20</h3>
          <p>20次技术分享</p>
        </li>
        <li>
          <ImageMax className='pic' loading='lazy' maxWidth="150" src="https://www.xiaoxili.com/images/icon-6@2x.png" alt="icon-6" width='75' height='60'/>
          <h3>03</h3>
          <p>3个开源贡献</p>
        </li>
      </ul>
    </section>
  )
}

export default Introduction
