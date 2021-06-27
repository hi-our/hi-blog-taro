import React from 'react'
import Link from '../link-html'
import ImageMax from "components/image-max"
import './styles.styl'


export default class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="footer-main">
          {/* <div className="footer-core">
            <a href="/" className="footer-logo">
              <h2>小溪里 xiaoxili.com</h2>
            </a>
            
          </div> */}
          <div className="footer-design">
            Designed by <div href='https://www.xiaoxili.com/jump?url=https%3A%2F%2Fwww.buerxue.com' title='不二雪的UI作品集' className='link'><ImageMax src='https://www.xiaoxili.com/images/logo-buerxue.png' maxWidth='260' width='130' height='60' alt='不二雪的UI作品集' /></div>
          </div>
          {/* <section className="footer-links">
            <dl>
              <dt>关于</dt>
              <dd><Link href="/about">关于小溪里</Link></dd>
              <dd><Link href="/about">关于 Hi Our</Link></dd>
            </dl>
            <dl>
              <dt>社区</dt>
              <dd><a href="https://taro.jd.com">Taro</a></dd>
              <dd><a href="https://tuture.co">图雀社区</a></dd>
            </dl>
            <dl>
              <dt>友情链接</dt>
              <dd><a href="https://coder.itclan.cn/">itclanCoder</a></dd>
              <dd><a href="https://appclip.icu/">APPCLIP</a></dd>
            </dl>
          </section> */}
        </div>
        {/* <div className="footer-copyright">
          Copyright © 2020. All Rights Reserved.&nbsp;<br />
          <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备20020594号</a>&nbsp;
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502005403" target="_blank" rel="noopener noreferrer" className='footer-gongan'>&nbsp;沪公网安备 31010502005403号</a>
        </div> */}
      </footer>
    )
  }
}
