import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.logo}>"Kar<span style={{color: 'darkred'}}>M</span>a"</div>
    <div className={styles.text}>
   © {new Date().getFullYear()}. All rights reserved.
    </div>
    </div>
  )
}

export default Footer
