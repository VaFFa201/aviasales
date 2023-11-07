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

export const fetchDataFirstSuccess = (data) => {
  return {
    type: 'FETCH_DATA_FIRST_SUCCESS',
    payload: data,
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  }
}

export const errorModalToggle = () => ({ type: 'ERROR_MODAL_TOGGLE' })

export const fetchDataNext = (searchId) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest())
    try {
      const response = await fetch(`${apiBase}/tickets?searchId=${searchId}`)

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }

      const body = await response.json()
      dispatch(fetchDataSuccess(body))

      if (!body.stop) {
        return dispatch(fetchDataNext(searchId))
      }

      // if (body.stop) {
      //   console.log('stop from stop')
      // }

      return body
    } catch (error) {
      dispatch(fetchDataFailure(error))
      dispatch(errorModalToggle())
    }
  }
}

export const fetchDataFirst = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest())
    try {
      const response = await fetch(`${apiBase}/search`)
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }
      const body = await response.json()

      const dataResponse = await fetch(`${apiBase}/tickets?searchId=${body.searchId}`)
      const dataBody = await dataResponse.json()

      dispatch(fetchDataFirstSuccess(dataBody))

      return dispatch(fetchDataNext(body.searchId))
    } catch (error) {
      dispatch(fetchDataFailure(error))
      dispatch(errorModalToggle())
    }
  }
}
