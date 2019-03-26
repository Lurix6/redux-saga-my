export function increment() {
  return {
    type: 'INCREMENT'
  };
}


export function decrement() {
  return {
    type: 'DECREMENT'
  };
}


export function incrementAsync() {
  return {
    type:'INCREMENT_ASYNC'
  }
}

export function helloSaga() {
  return {
    type: 'HELO_SAGA'
  }
}
