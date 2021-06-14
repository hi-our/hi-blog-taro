import React from 'react'
import ModuleTitle from '../../../../components/module-title'
import './styles.styl'
// import LinkHtml from "@components/link-html"
// import ImageMax from "@components/image-max"
// import { FadeScrollComponentY, FadeScrollComponentX } from "@components/fade-scroll"

export default function Index({ posts = [] }) {
  const moduleProps = {
    enTitle: 'BLOG POST',
    cnTitleLeft: '博客',
    cnTitleRight: '文章'
  }

  posts = posts.slice(0, 4)

  // const heroPost = posts[0] || {}
  // const morePosts = posts.slice(1) || {}

  return (
    <section className="blog-post" id='blog-post'>
      <ModuleTitle {...moduleProps} />

      {/* <div className="blog-container">
        <div className="blog-wrap">
          <LinkHtml className={"block-news"} href={`/blog/posts/${heroPost.slug}`}>
            <FadeScrollComponentX delay='0.1'>
              <ImageMax loading='lazy' className="pic" src={heroPost.coverImage} alt={heroPost.title} maxWidth='920' width='460' height='338' />
              <h3 className="title">{heroPost.title}</h3>
              <p className="info">{heroPost.summary}</p>
            </FadeScrollComponentX>
          </LinkHtml>

          <div className="block-list">
            {morePosts.map((item, index) => (
              <LinkHtml className={"block-item"} href={`/blog/posts/${item.slug}`} key={item.slug}>
                <FadeScrollComponentY className="content" delay={(index + 2) * 0.1}>
                  <h3 className="title">{item.title}</h3>
                  <p className="info">{item.summary}</p>
                  <div className="more">
                    更多
                  </div>
                </FadeScrollComponentY>
              </LinkHtml>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  )
}
