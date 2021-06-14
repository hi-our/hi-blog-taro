import React, { Component, Fragment } from 'react';
import ModuleTitle from '@components/module-title'
import ImageMax from "@components/image-max"
import { FadeScrollComponentY } from "@components/fade-scroll"

import './styles.styl'
class OpenResources extends Component {
  render() {
    const titleProps = {
      enTitle: 'OPEN SOURCE',
      cnTitleLeft: '开源',
      cnTitleRight: '组件',
    };
    return (
      <section className="open-main" id='open-resource'>
        <ModuleTitle {...titleProps} />
        <div className="list">
          <a className="item" href="https://www.xiaoxili.com/packages/react-better-image-cc/">
            <FadeScrollComponentY className="item-img" delay="0.3">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-3d-swiper@2x.png"
                maxWidth='104'
                width="52"
                height="52"
                alt="轻 3D 图片轮播"
                className="item-icon-img"
              />

            </FadeScrollComponentY>
            <div className="item-line"></div>
            <h3>轻 3D 图片轮播</h3>
            <p>react-slider-3d-cc</p>
            <div className="item-mask">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-group@2x.png"
                maxWidth='80'
                width="40"
                height="40"
                alt="链接"
                className="item-icon-img"
              />
            </div>
          </a>
          <a className="item" href="https://www.xiaoxili.com/packages/react-better-image-cc/">
            <FadeScrollComponentY className="item-img" delay="0.4">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-img-loading@2x.png"
                maxWidth='104'
                width="52"
                height="52"
                alt="图片懒加载组件"
                className="item-icon-img"
              />
            </FadeScrollComponentY>
            <div className="item-line"></div>
            <h3>图片懒加载组件</h3>
            <p>react-better-image-cc</p>
            <div className="item-mask">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-group@2x.png"
                maxWidth='80'
                width="40"
                height="40"
                alt="链接"
                className="item-icon-img"
              />
            </div>
          </a>
          <a className="item" href="https://www.xiaoxili.com/packages/react-ui-mode-cc/">
            <FadeScrollComponentY className="item-img" delay="0.5">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-res-coms@2x.png"
                maxWidth='104'
                width="52"
                height="52"
                alt="融合响应式设计React 组件"
                className="item-icon-img"
              />
            </FadeScrollComponentY>
            <div className="item-line"></div>
            <h3>融合响应式组件</h3>
            <p>react-ui-mode-cc</p>
            <div className="item-mask">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-group@2x.png"
                maxWidth='80'
                width="40"
                height="40"
                alt="链接"
                className="item-icon-img"
              />
            </div>
          </a>
          <a className="item" href="https://www.xiaoxili.com/packages/react-address-picker-cc/">
            <FadeScrollComponentY className="item-img" delay="0.6">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-address@2x.png"
                maxWidth='104'
                width="52"
                height="52"
                alt="收货地址组件"
                className="item-icon-img"
              />
            </FadeScrollComponentY>
            <div className="item-line"></div>
            <h3>收货地址组件</h3>
            <p>react-address-picker</p>
            <div className="item-mask">
              <ImageMax
                loading='lazy'
                src="https://www.xiaoxili.com/images/open-resources/icon-group@2x.png"
                maxWidth='80'
                width="40"
                height="40"
                alt="链接"
                className="item-icon-img"
              />
            </div>
          </a>
        </div>
      </section>
    );
  }
}

export default OpenResources;
