import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, helloSaga, incrementAsync } from './actions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>your number :{' '}{this.props.count}</p>

        <div className='btnDiv'>

          <button onClick={this.props.increment}>Increment</button>
          {' '}
          <button onClick={this.props.decrement}>Decrement</button>
          {' '}
          <button onClick={this.props.incrementAsync}>incrementAsync</button>
          {' '}
          <button onClick={this.props.helloSaga}>helloSaga</button>
        </div>

      </div>
    );
  }
}

export default connect(store => ({
  count: store.count
}), {increment, decrement, incrementAsync, helloSaga})(App)
