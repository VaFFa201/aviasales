const apiBase = 'https://aviasales-test-api.kata.academy'

export const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST',
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  }
}

export const fetchSearchId = (data) => {
  console.log(data)
  return {
    type: 'FETCH_SEARCH_ID',
    payload: data,
  }
}

export const fetchDataFirst = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    return fetch(`${apiBase}/search`)
      .then((response) => response.json())
      .then((body) => {
        dispatch(fetchSearchId(body))
        return body
      })
      .then((data) => fetch(`${apiBase}/tickets?searchId=${data.searchId}`))
      .then((response) => response.json())
      .then((body) => dispatch(fetchDataSuccess(body)))
      .catch((error) => dispatch(fetchDataFailure(error)))
  }
}

export const fetchDataNext = (searchId) => {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    return fetch(`${apiBase}/tickets?searchId=${searchId}`)
      .then((response) => response.json())
      .then((body) => {
        dispatch(fetchDataSuccess(body))
        if (!body.stop) {
          console.log(body.stop)
        }
      })
      .catch((error) => dispatch(fetchDataFailure(error)))
  }
}
