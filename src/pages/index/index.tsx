import { Component } from 'react'
import './index.styl'
import BlogPost from "./components/blog-post";

export default class Index extends Component {
  state = {
    isFold: [true, true, true, true, true, true]
  }

  setIsFold (index) {
    const list = [...this.state.isFold]
    list[index] = !list[index]
    this.setState({
      isFold: list
    })
  }

  render () {
    const isFold = this.state.isFold
    return (
      <body>
        <BlogPost />
      </body>
    )
  }
}
