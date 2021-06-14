import Taro from "@tarojs/taro";
import { useEffect, useState } from 'react'
import './index.styl'
import BlogPost from "./components/blog-post";

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
      <BlogPost posts={morePosts} />
    </body>
  )
}