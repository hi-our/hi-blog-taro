import React from 'react'
import './styles.styl'
import Link from '../link-html'

export default function Header({ navName }) {
  const [isOpen, setIsOpen ] = React.useState(false)

  const renderMainNav = (isPC) => {

    return (
      <nav className={isPC ? 'navigation-pc' : 'navigation-mobile'}>
        <ul>
          <li>
            <Link href='/' isActive={navName === 'home'} addHtml={false}>首页</Link>
          </li>
          <li>
            <Link href='/blog' isActive={navName === 'blog'} title="小溪里博客">博客</Link>
          </li>
          <li>
            <a href='/hi-face' title="Hi头像教程">小册</a>
          </li>
          {/* <li>
            <Link href='/about' title="关于我们" isActive={navName === 'about'}>关于</Link>
          </li> */}
          <li>
            <Link href='https://www.buerxue.com' title='设计师不二雪作品集'>小雪作品</Link>
          </li>
        </ul>
      </nav>
    )
  }


  return (
    <>
      {/* 头部 */}
      <header className="header">
        <div className="header-main">
          <h1 className="logo">
            <Link href='/' addHtml={false}>
              小溪里 xiaoxili.com
              </Link>
          </h1>
          {/* {renderMainNav(true)}
          {renderMainOperation()} */}
          {/* 杠杠图标 */}
        </div>
        {/* <button
          className={"navigation-toggle " + (isOpen ? 'active' : '')}
          onClick={toggleMenuStatus}
          aria-label={isOpen ? '关闭菜单' : '打开菜单'}
        >
          <div className='text'>菜单切换</div>
        </button>
        <div
          className={'navigation-pop ' + (isOpen ? 'active' : '')}
        >
          <button className="navigation-pop-btn" onClick={toggleMenuStatus} aria-label={isOpen ? '关闭手机菜单' : '打开手机菜单'}></button>
          {renderMainNav()}
          {renderMainOperation()}
        </div> */}
      </header>
      {/* 导航菜单 */}
    </>
  )
}