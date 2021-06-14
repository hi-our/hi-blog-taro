import React from 'react'
import ModuleTitle from 'components/module-title'
import LinkHtml from 'components/link-html'
import ImageMax from "components/image-max"
import './styles.styl'

export default function Index({ posts = [] }) {
  const moduleProps = {
    enTitle: 'BLOG POST',
    cnTitleLeft: '博客',
    cnTitleRight: '文章'
  }

  posts = posts.slice(0, 4)

  const heroPost = posts[0] || {}
  const morePosts = posts.slice(1) || {}

  return (
    <section className="blog-post" id='blog-post'>
      <ModuleTitle {...moduleProps} />

      <div className="blog-container">
        <div className="blog-wrap">
          <LinkHtml className={"block-news"} href={`/blog/posts/${heroPost.slug}`}>
            <div delay='0.1'>
              {!!heroPost.coverImage && <ImageMax loading='lazy' className="pic" src={heroPost.coverImage} alt={heroPost.title} maxWidth='920' />}
              <h3 className="title">{heroPost.title}</h3>
              <p className="info">{heroPost.summary}</p>
            </div>
          </LinkHtml>

          <div className="block-list">
            {morePosts.map((item, index) => (
              <LinkHtml className={"block-item"} href={`/blog/posts/${item.slug}`} key={item.slug}>
                <div className="content" delay={(index + 2) * 0.1}>
                  <h3 className="title">{item.title}</h3>
                  <p className="info">{item.summary}</p>
                  <div className="more">
                    更多
                  </div>
                </div>
              </LinkHtml>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
