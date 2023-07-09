import {Component} from 'react'

class Welcome extends Component {
  handleClick = () => console.log(this)

  render() {
    return <button onClick={this.handleClick}>Click Me</button>
  }
}

export default Welcome
