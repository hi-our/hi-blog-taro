import React, { Fragment } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'

import './styles.styl'

export default function About() {

  return (
    <body className="page-about">
      <Header />
      <div className="page-wrap">
        <div className='page-main'>
          <div className="page-module module-join">
            <div className="module-main">
              <h2>关于小溪里</h2>
              <p>沪江 CCtalk 前端开发工程师，Hi头像小程序作者，腾讯云云开发布道师， Taro 社区的知识共建者。</p>
            </div>
          </div>
          <div className="page-module module-about">
            <div className="module-main">
              <h2>关于 Hi our</h2>
              <p>嗨在我们：(英文名称：HiOur）始建于2020年4月，是一个富有青春活力的技术综合团队。</p>
              <p>HiOur主要是侧重于原生代码的书写以及对腾讯云技术的应用，专注于自主案例的开发和对案例的讲解培训，案例特色主要基于生活，通过技术来改变生活，让生活更加美好。</p>
            </div>
          </div>
          <div className="module-member">
            <div className="module-main">
              <ul className="member-list">
                <li className="member-item">
                  <img lazyLoad={true} src="https://image-hosting.xiaoxili.com/img/20200712183315.jpg" alt="盛瀚钦" width="100" height="152" />
                  <div className="item-main">
                    <h3>盛瀚钦</h3>
                    <p>创始人</p>
                    <p>负责项目统筹规划、架构设计，分工安排</p>
                  </div>
                </li>
                <li className="member-item">
                  <img lazyLoad={true} src="https://image-hosting.xiaoxili.com/img/20200712183316.jpg" alt="盛瀚钦" width="100" height="152" />
                  <div className="item-main">
                    <h3>李欢</h3>
                    <p>Web前端</p>
                    <p>负责团队项目功能的实现</p>
                  </div>
                </li>
                <li className="member-item">
                  <img lazyLoad={true} src="https://image-hosting.xiaoxili.com/img/20200712183314.jpg" alt="盛瀚钦" width="100" height="152" />
                  <div className="item-main">
                    <h3>王宝国</h3>
                    <p>产品经理</p>
                    <p>负责团队的项目策划以及产品需求</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          <div className="page-module module-contact">
            <div className="module-main">
              <h2>联系我</h2>
              <p><a href="mailto:shenghanqin@163.com">shenghanqin@163.com</a></p>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </body>
  )
}