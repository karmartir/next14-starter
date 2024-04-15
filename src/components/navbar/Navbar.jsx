import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {


  return (
    <div className={styles.container}>
     <Link href='/' className={styles.logo}>"Kar<span style={{color: 'darkred'}}>M</span>a"</Link>
     <div>
       <Links/>
     </div>
    </div>
  )
}

export default Navbar
