/* eslint-disable indent */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as filterActions from '../../actions/filterActions'

import styles from './AsideFilter.module.scss'

function AsideFilter({ filters, handleCheckboxChange }) {
  // const [options, setOptions] = useState(filterOptions)

  // const handleCheckboxChange = (id) => {
  //   setOptions((prevOptions) => {
  //     const updatedOptions = prevOptions.map((option) => {
  //       if (option.id === id) {
  //         return {
  //           ...option,
  //           checked: !option.checked,
  //         }
  //       }
  //       if (id === 0) {
  //         return {
  //           ...option,
  //           checked: !prevOptions[0].checked,
  //         }
  //       }
  //       return option
  //     })
  //     if (updatedOptions.slice(1).every((option) => option.checked)) {
  //       updatedOptions[0].checked = true
  //     } else if (updatedOptions.some((option) => option.checked)) {
  //       updatedOptions[0].checked = false
  //     }
  //     return updatedOptions
  //   })
  // }

  const optionsToRender = filters.map((option) => {
    const { id, label, checked } = option

    return (
      <label key={id} className={styles.filter__option} htmlFor={id}>
        <input type="checkbox" id={id} checked={checked} onChange={() => handleCheckboxChange(id)} />
        <span className={styles['custom-checkbox']} />
        {label}
      </label>
    )
  })

  return (
    <aside className={styles.filter}>
      <div className={styles.filter__container}>
        <h3 className={styles.filter__title}>Количество пересадок</h3>
        <div className={styles.filter__options}>{optionsToRender}</div>
      </div>
    </aside>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filterOptions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(filterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideFilter)
