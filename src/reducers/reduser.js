/* eslint-disable indent */

const defaultState = {
  filterOptions: [
    { id: 0, label: 'Все', checked: false },
    { id: 1, label: 'Без пересадок', checked: false },
    { id: 2, label: '1 пересадка', checked: false },
    { id: 3, label: '2 пересадки', checked: false },
    { id: 4, label: '3 пересадки', checked: false },
  ],
  tabsOptions: [
    { id: 1, label: 'Самый дешевый', active: false },
    { id: 2, label: 'Самый быстрый', active: false },
    { id: 3, label: 'Оптимальный', active: true },
  ],
  data: [],
  loading: false,
  error: false,
  stop: null,
  searchId: '',
}

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_TAB_CHANGE':
      return {
        ...state,
        tabsOptions: state.tabsOptions.map((tab) => {
          const newTab = { ...tab, active: tab.id === action.payload }
          return newTab
        }),
      }
    case 'HANDLE_CHECKBOX_CHANGE':
      return {
        ...state,
        filterOptions: state.filterOptions
          .map((option) => {
            if (option.id === action.payload) {
              return {
                ...option,
                checked: !option.checked,
              }
            }
            if (action.payload === 0) {
              return {
                ...option,
                checked: !state.filterOptions[0].checked,
              }
            }
            return option
          })
          .map((option, index, array) => {
            if (index === 0) {
              if (array.slice(1).every((item) => item.checked)) {
                return {
                  ...option,
                  checked: true,
                }
              }
              if (array.some((item) => item.checked)) {
                return {
                  ...option,
                  checked: false,
                }
              }
            }
            return option
          }),
      }
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.tickets],
        stop: action.payload?.stop,
      }
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'FETCH_SEARCH_ID':
      console.log(action.payload.searchId)
      return {
        ...state,
        searchId: action.payload.searchId,
      }
    default:
      return state
  }
}

export default reducer
