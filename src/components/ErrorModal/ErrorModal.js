import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as fetchActions from '../../actions/fetchActions'
import warning from '../../assets/images/Warning.svg'

import styles from './ErrorModal.module.scss'

function ErrorModal({ error, errorModalToggle }) {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <img className={styles.modal__img} src={warning} alt="warning" />
        <p className={styles.modal__header}>{error.message}</p>
        <p className={styles.modal__description}>
          Что-то пошло не так и на данный момент сервер не может показать все билеты.
          <br /> Вы можете продолжить просматривать уже полученные билеты, либо перезагрузить страницу.
        </p>
        <div className={styles['modal__btns-wrap']}>
          <button type="button" className={`${styles.modal__btn} ${styles.blue}`} onClick={handleClick}>
            Обновить
          </button>
          <button type="button" className={`${styles.modal__btn} ${styles.red}`} onClick={errorModalToggle}>
            Продолжить
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: state.error,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal)
