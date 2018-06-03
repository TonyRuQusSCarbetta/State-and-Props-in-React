import React, {Component} from 'react';
// import { Container, Row, Col } from 'reactstrap';
import '../Styles/App.css';
import '../Styles/hover.css';
import Content from '../Components/Content.js';
import '../Styles/hover.css';
import '../Styles/grid/grid12.css'
// -----------------------------------------------------------------------------
class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Tony',
    };
  //this.anyNewMethod = this.anyNewMethod.bind(this)
  }
  // -----------------------------------------------------------------------------
  render() {
    return (
      <div className="container-fluid animated zoomIn">
        <div className="row">

          <div className="col-md-6 hvr-hang bg-primary">
            <Content number="1"/>
          </div>

          <div className="col-md-6 hvr-hang bg-success">
            <Content number="2"/>
          </div>

        </div>
    </div>)
  }
}
// -----------------------------------------------------------------------------
export default App;
