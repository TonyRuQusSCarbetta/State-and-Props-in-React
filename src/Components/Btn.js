import React, { Component } from 'react';
import '../Styles/Content.css';
import '../Styles/hover.css';
// -----------------------------------------------------------------------------
class Btn extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
    }
    // this.createAnyNewMethod = this.createAnyNewMethod.bind(this)
  }
// -----------------------------------------------------------------------------
  render() {
    return (
        <div className="btn">Click Me</div>
    )
  }
}
// -----------------------------------------------------------------------------
export default Btn;
