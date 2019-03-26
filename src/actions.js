export function requestDog() {
  return {
    type: 'REQUESTED_DOG'
  };
}


export function requestDogSuccess(data) {
  return {
    type: 'REQUESTED_DOG_SUCCEEDED',
    url: data.message
  };
}


export function requestDogError() {
  return {
    type:'REQUESTED_DOG_FAILD'
  }
}

export function fetchDog() {
  return {
    type: 'FETCHED_DOG'
  }
}
