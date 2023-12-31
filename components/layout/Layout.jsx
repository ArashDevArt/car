import React from 'react'
import styles from './Layout.module.css'
import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <>
    <Link href="/">
    <header className={styles.header}>
        <h2>arashCar</h2>
        <p>chose an buy your car</p>
    </header>
    </Link>
    <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
        arashCar project &copy;
    </footer>
    </>
    
  )
}

export default Layout