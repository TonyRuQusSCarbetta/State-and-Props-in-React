import React, { Component } from 'react';
import '../Styles/Content.css';
import '../Styles/hover.css';
// -----------------------------------------------------------------------------
class Content extends Component {
  constructor () {
    super()
    this.state = {
      message: "Click the button to change this inital state."

    }
    this.changeHeader = this.changeHeader.bind(this)
  }
  changeHeader() {
    this.setState({
      message: "Congrats you changed the state!"
    })
  }
// -----------------------------------------------------------------------------
  render() {
    return (
      <div>

        <h1>Content Component<i class="fab fa-github p-3 fa-x"></i>{this.props.number}</h1>

        <h2>{this.state.message}</h2>

        <button onClick={this.changeHeader}>Click Me</button>
      </div>

    )
  }
}
// -----------------------------------------------------------------------------
export default Content;

//CHANGE THE STATE
//create a method attached to a button with onclick event
//bind the method to the state
