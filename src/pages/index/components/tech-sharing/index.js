import React, { Component, Fragment } from 'react'
import ModuleTitle from 'components/module-title'
import ImageMax from "components/image-max"

import './styles.styl'

class TechSharing extends Component {
  render() {
    const titleProps = {
      enTitle: 'TECH-SHARING',
      cnTitleLeft: '技术',
      cnTitleRight: '分享',
    }
    return (
      <section className="tech-main" id='tech-sharing'>
        <ModuleTitle {...titleProps} />
        <div className="tech-content">
          <a className="item" href="https://www.xiaoxili.com/slides/5-minapp-tabbar/">
            <div className="item-img" delay='0.1'>
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/tech-share/tab-bar@2x.png"
                alt="小程序 TabBar 创意动画"
                className='pic'
                maxWidth={760}
                width='380'
                height='232'
              />
            </div>
            <div className="item-bar">小程序 TabBar 创意动画</div>
            <div className="item-mark">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/icon-group@2x.png"
                maxWidth="80"
                width="40"
                height="40"
                alt="链接"
                className="item-icon-img"
              />
            </div>
          </a>
          <a className="item" href="https://www.xiaoxili.com/slides/2-minapp-liveroom/">
            <div className="item-img" delay='0.2'>
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/tech-share/fun-img@2x.png"
                alt="小程序基础架构和功能优化"
                className='pic'
                maxWidth={760}
                width='380'
                height='232'
              />
            </div>
            <div className="item-bar">小程序基础架构和功能优化</div>
            <div className="item-mark">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/icon-group@2x.png"
                maxWidth="80"
                width="40"
                height="40"
                alt="链接"
                className="item-icon-img"
              />
            </div>
          </a>
          <a className="item" href="https://www.xiaoxili.com/slides/1-svg-animation/">
            <div className="item-img" delay='0.3'>
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/tech-share/svg-img@2x.png"
                alt="小程序 TabBar 创意动画"
                className='pic'
                maxWidth={760}
                width='380'
                height='232'
              />
            </div>
            <div className="item-bar">SVG动画研究的重要性</div>
            <div className="item-mark">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/icon-group@2x.png"
                maxWidth="80"
                width="40"
                height="40"
                alt="SVG动画研究的重要性"
                className="item-icon-img"
              />
            </div>
          </a>
        </div>
      </section>
    )
  }
}

export default TechSharing
