import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchDog } from './actions'
import './App.css';

class App extends Component {
  render() {

    console.log(this.props)

    return (
      <div>
       <button onClick={this.props.fetchDog}>Show Dog</button>
         {this.props.store.loading
           ? <p>Loading...</p>
           : this.props.store.error
               ? <p>Error, try again</p>
               : <p><img alt="dog" src={this.props.store.url}/></p>}
     </div>
    );
  }
}

export default connect(store => ({
    store: store.state
}), { fetchDog })(App)
