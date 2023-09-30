import React from 'react';
import SimulationPage from './Simulator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


class App extends React.Component {
  // state = {
  //   name: ""
  // }

  // componentDidMount() {
  //   fetch("http://localhost:3000")
  //     .then(res => res.json())
  //     .then(data => this.setState({ name: data.name }))
  // }

  render() {
    return (
      <Router>
        {/* <Link to='/login'>Simulation</Link>
        <Link to='/signup'>Simulation</Link> */}
        <Link to='/simulation'>Simulation</Link>
        <Routes>
          <Route exact path='/' component={SimulationPage} />
        </Routes>
      </Router>
    )
  }
}

export default App;
