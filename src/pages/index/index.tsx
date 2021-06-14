import Taro from "@tarojs/taro";
import { useEffect, useState } from 'react'
import './index.styl'
import BlogPost from "./components/blog-post"
import Introduction from "./components/introduction"
import OpenResource from "./components/open-resource"
import TechShare from "./components/tech-sharing"

export default function Index() {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    Taro.request({
      url: 'https://www.xiaoxili.com/posts.json'
    }).then(res => {
      console.log('res', res)
      setAllPosts(res.data)
    })
  }, [])

  const heroPost = allPosts[0] || {}
  const morePosts = allPosts.slice(1) || {}
  console.log('heroPost', heroPost, morePosts)

  return (
    <body>
      {/* <Banner heroPost={heroPost} noticeInView={noticeInView} /> */}
      <Introduction />
      <OpenResource />
      <BlogPost posts={morePosts} />
      <TechShare />
    </body>
  )
}