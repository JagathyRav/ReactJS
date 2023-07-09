import {Component} from 'react'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" />
      </div>
    )
  }
}

export default App
