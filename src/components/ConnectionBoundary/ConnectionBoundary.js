import useNavigatorOnline from 'use-navigator-online'

import styles from './ConnectionBoundary.module.scss'

function ConnectionBoundary({ children }) {
  const { isOnline } = useNavigatorOnline()

  if (isOnline) {
    return children
  }

  return (
    <div className={styles.connection}>
      <p className={styles.connection__text}>There are some problems with your internet connection</p>
    </div>
  )
}

export default ConnectionBoundary
