import { Component } from 'react'
import './index.styl'

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
        Hello World
      </body>
    )
  }
}
