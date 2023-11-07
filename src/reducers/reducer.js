/* eslint-disable default-param-last */
/* eslint-disable indent */

const defaultState = {
  filterOptions: [
    { id: 0, label: 'Все', option: 'all', checked: false },
    { id: 1, label: 'Без пересадок', option: 0, checked: false },
    { id: 2, label: '1 пересадка', option: 1, checked: false },
    { id: 3, label: '2 пересадки', option: 2, checked: false },
    { id: 4, label: '3 пересадки', option: 3, checked: false },
  ],
  tabsOptions: [
    { id: 1, label: 'Самый дешевый', active: false },
    { id: 2, label: 'Самый быстрый', active: false },
    { id: 3, label: 'Оптимальный', active: true },
  ],
  activeTabId: 3,
  activeFilters: [],
  dataFirst: [],
  data: [],
  errorModalOn: false,
  loading: false,
  error: null,
  cardCount: 5,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_TAB_CHANGE':
      return {
        ...state,
        activeTabId: action.payload,
        cardCount: 5,
      }
    case 'ERROR_MODAL_TOGGLE':
      return {
        ...state,
        errorModalOn: !state.errorModalOn,
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
    case 'GET_ACTIVE_FILTERS':
      return {
        ...state,
        activeFilters: state.filterOptions.reduce((acc, option) => {
          if (option.checked) {
            acc.push(option.option)
          }
          return acc
        }, []),
      }
    case 'HANDLE_CARD_COUNT_CHANGE':
      return {
        ...state,
        cardCount: state.cardCount + action.payload,
      }
    case 'FETCH_DATA_FIRST_SUCCESS':
      return {
        ...state,
        loading: false,
        dataFirst: [...state.dataFirst, ...action.payload.tickets],
      }
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.tickets],
      }
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
