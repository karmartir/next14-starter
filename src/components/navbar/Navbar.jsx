import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import { auth } from '@/lib/auth'

const Navbar = async() => {

  const session = await auth();


  return (
    <div className={styles.container}>
     <Link href='/' className={styles.logo}>"Kar<span style={{color: 'darkred'}}>M</span>a"</Link>
     <div>
       <Links session={session}/>
     </div>
    </div>
  )
}

export default Navbar
