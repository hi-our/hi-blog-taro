import Taro, { useShareAppMessage } from "@tarojs/taro";
import { useEffect, useState } from 'react'
import Header from 'components/header'
import Banner from "./components/banner"
import BlogPost from "./components/blog-post"
import Introduction from "./components/introduction"
import OpenResource from "./components/open-resource"
import TechShare from "./components/tech-sharing"

import './index.styl'

export default function Index() {
  const posts = Taro.getStorageSync("posts")
  const [allPosts, setAllPosts] = useState(JSON.parse(posts) || [])

  useEffect(() => {
    if (allPosts.length === 0) {
      console.log('allPosts', allPosts.length)
      Taro.request({
        url: 'https://www.xiaoxili.com/posts.json'
      }).then(res => {
        console.log('res', res)
        setAllPosts(res.data)
      })
    }
  }, [allPosts.length])

  const heroPost = allPosts[0] || {}
  const morePosts = allPosts.slice(1) || {}

  useShareAppMessage(() => {
    return {
      title: '小溪里博客',
      path: '/pages/index/index',
      imageUrl: 'https://image-hosting.xiaoxili.com/img/img/20201231/1942cc12adbcebcb940f59a3e6023252-3de225.png'
    }
  })

  return (
    <body className="page-home">
      <Header />
      <Banner heroPost={heroPost} />
      <Introduction />
      <OpenResource />
      <BlogPost posts={morePosts} />
      <TechShare />
    </body>
  )
}